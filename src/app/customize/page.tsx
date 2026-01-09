import Link from 'next/link'
import { Upload, Type, Palette, Layers, Download } from 'lucide-react'

export default function CustomizePage() {
  return (
    <div className="pt-[80px] lg:pt-[80px]  bg-white">
      <div className=" mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Customize Your Products</h1>
        <p className="text-center text-gray-600 mb-12">Create unique designs with our easy-to-use customization tool</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview Area */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Preview</h2>
            <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400">YOUR DESIGN</span>
                </div>
                <p className="text-gray-600">Upload your design to preview</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-smooth">
                Save Design
              </button>
              <button className="flex-1 px-6 py-3 bg-white border-2 border-black text-black rounded-lg font-semibold hover:bg-gray-50 transition-smooth">
                Get Quote
              </button>
            </div>
          </div>

          {/* Customization Tools */}
          <div className="space-y-6">
            {/* Upload Design */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Upload className="w-6 h-6" />
                <h3 className="text-xl font-bold text-gray-900">Upload Design</h3>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-smooth cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p className="text-gray-600 mb-2">Drag and drop your design here</p>
                <p className="text-sm text-gray-500">or click to browse</p>
              </div>
            </div>

            {/* Add Text */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-6 h-6" />
                <h3 className="text-xl font-bold text-gray-900">Add Text</h3>
              </div>
              <input
                type="text"
                placeholder="Enter your text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mb-3"
              />
              <div className="grid grid-cols-2 gap-3">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Font Family</option>
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Times New Roman</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Font Size</option>
                  <option>12px</option>
                  <option>16px</option>
                  <option>24px</option>
                </select>
              </div>
            </div>

            {/* Choose Colors */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6" />
                <h3 className="text-xl font-bold text-gray-900">Choose Colors</h3>
              </div>
              <div className="grid grid-cols-6 gap-3">
                {['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FFC0CB', '#808080'].map((color) => (
                  <button
                    key={color}
                    className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:scale-110 transition-smooth"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Product Options */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6" />
                <h3 className="text-xl font-bold text-gray-900">Product Options</h3>
              </div>
              <div className="space-y-3">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Select Product Type</option>
                  <option>T-Shirt</option>
                  <option>Hoodie</option>
                  <option>Mug</option>
                  <option>Cap</option>
                </select>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Select Size</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
