import React, { useState } from 'react';
import { Upload, Plus } from 'lucide-react';

const Create: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Item</h1>

        {/* File Upload */}
        <div className="mb-8">
          <p className="text-gray-400 mb-2">Image, Video, Audio, or 3D Model*</p>
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-8">
            {previewUrl ? (
              <div className="relative w-64 h-64 mx-auto">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setPreviewUrl('');
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <Plus className="rotate-45" size={16} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center cursor-pointer">
                <Upload size={48} className="text-gray-400 mb-4" />
                <p className="text-gray-400 text-center mb-2">
                  Drag and drop your file here, or click to browse
                </p>
                <p className="text-gray-500 text-sm text-center">
                  Max size: 100MB
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,video/*,audio/*,.glb,.gltf"
                  onChange={handleFileSelect}
                />
              </label>
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Name*</label>
            <input
              type="text"
              className="w-full bg-[#1A1A1A] rounded-xl p-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="Item name"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">External Link</label>
            <input
              type="text"
              className="w-full bg-[#1A1A1A] rounded-xl p-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="https://yoursite.io/item/123"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Description</label>
            <textarea
              className="w-full bg-[#1A1A1A] rounded-xl p-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none min-h-[100px]"
              placeholder="Provide a detailed description of your item"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Collection</label>
            <select className="w-full bg-[#1A1A1A] rounded-xl p-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none">
              <option value="">Select collection</option>
              <option value="collection1">Collection 1</option>
              <option value="collection2">Collection 2</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Properties</label>
            <button className="bg-[#1A1A1A] text-white px-4 py-2 rounded-xl border border-gray-700 hover:border-blue-500">
              <Plus size={20} className="inline mr-2" />
              Add Property
            </button>
          </div>

          <button className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 font-semibold">
            Create Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
