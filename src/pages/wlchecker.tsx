import React, { useState, useEffect } from 'react';
import { Box, Container, TextField, Button, Typography, Paper, useTheme, useMediaQuery, CircularProgress } from '@mui/material';
import { whitelistAddresses } from '../data/whitelist';
import ReCAPTCHA from 'react-google-recaptcha';

const WhitelistChecker = () => {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkCount, setCheckCount] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Rate limiting için cooldown kontrolü
  useEffect(() => {
    if (cooldown) {
      const timer = setTimeout(() => {
        setCooldown(false);
      }, 60000); // 1 dakika cooldown
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setResult(null);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setIsVerified(!!value);
  };

  const checkWhitelist = async () => {
    if (!isVerified) {
      setResult('Please complete the reCAPTCHA verification first.');
      return;
    }

    if (cooldown) {
      setResult('Please wait a moment before checking another address.');
      return;
    }

    if (checkCount >= 5) {
      setCooldown(true);
      setCheckCount(0);
      setResult('Rate limit exceeded. Please try again in 1 minute.');
      return;
    }

    try {
      setIsLoading(true);
      const normalizedAddress = address.trim();
      console.log('Checking address:', normalizedAddress);
      
      const isWhitelisted = whitelistAddresses.some(
        whitelistAddress => whitelistAddress.toLowerCase() === normalizedAddress.toLowerCase()
      );
      
      setResult(
        isWhitelisted 
          ? 'Congratulations! This address is whitelisted.' 
          : 'This address is not whitelisted.'
      );

      setCheckCount(prev => prev + 1);
    } catch (error) {
      console.error('Error checking whitelist:', error);
      setResult('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 4 }}>
      <Box 
        sx={{ 
          width: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          p: { xs: 2, sm: 4 },
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #00bcd4, #2196f3)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4
          }}
        >
          Whitelist Checker
        </Typography>

        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4 },
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Enter your Solana wallet address to check if it's whitelisted
          </Typography>

          <TextField
            fullWidth
            label="Solana Wallet Address"
            variant="outlined"
            value={address}
            onChange={handleAddressChange}
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#00bcd4',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
            placeholder="e.g., 5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <ReCAPTCHA
              sitekey="6LfBXzorAAAAADhc4RHtGrQjy0CxS4Ss9a4Bx8cx" // Buraya yeni aldığınız Site Key'i yazın
              onChange={handleRecaptchaChange}
              theme="dark"
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            onClick={checkWhitelist}
            disabled={!address || !isVerified || isLoading || cooldown}
            sx={{
              py: 1.5,
              background: 'linear-gradient(45deg, #00bcd4, #2196f3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #2196f3, #00bcd4)',
              },
              '&.Mui-disabled': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.3)',
              },
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Check Status'
            )}
          </Button>

          {result && (
            <Typography 
              sx={{ 
                mt: 3,
                p: 2,
                borderRadius: 1,
                textAlign: 'center',
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                background: result.includes('Congratulations') 
                  ? 'rgba(76, 175, 80, 0.1)' 
                  : 'rgba(244, 67, 54, 0.1)',
                color: result.includes('Congratulations') 
                  ? '#4caf50' 
                  : '#f44336',
                border: '1px solid',
                borderColor: result.includes('Congratulations') 
                  ? 'rgba(76, 175, 80, 0.3)' 
                  : 'rgba(244, 67, 54, 0.3)',
              }}
            >
              {result}
            </Typography>
          )}

          {cooldown && (
            <Typography 
              sx={{ 
                mt: 2,
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem'
              }}
            >
              Rate limit: {checkCount}/5 checks per minute
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default WhitelistChecker; 