import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Paper } from '@mui/material';
import { whitelistAddresses } from '../../data/whitelist';

const WhitelistChecker = () => {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const checkWhitelist = () => {
    try {
      const normalizedAddress = address.trim().toUpperCase();
      const isWhitelisted = whitelistAddresses.includes(normalizedAddress);
      
      setResult(
        isWhitelisted 
          ? 'Tebrikler! Bu adres whitelist\'te bulunuyor.' 
          : 'Bu adres whitelist\'te bulunmuyor.'
      );
    } catch (error) {
      setResult('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Whitelist Kontrol
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Solana cüzdan adresinizi girerek whitelist kontrolü yapabilirsiniz.
          </Typography>
          <TextField
            fullWidth
            label="Solana Cüzdan Adresi"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ mb: 2 }}
            placeholder="örn: 5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"
          />
          <Button
            fullWidth
            variant="contained"
            onClick={checkWhitelist}
            disabled={!address}
          >
            Kontrol Et
          </Button>
          {result && (
            <Typography 
              sx={{ mt: 2 }} 
              align="center" 
              color={result.includes('bulunuyor') ? 'success.main' : 'error.main'}
            >
              {result}
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default WhitelistChecker; 