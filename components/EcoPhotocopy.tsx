
import React, { useState } from 'react';

const EcoPhotocopy: React.FC = () => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        }
    };

  return (
    <section id="photocopy" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Eco-Friendly Photocopy Service</h2>
          <p className="text-lg text-gray-500 mt-2">Printing on recycled paper, delivered to your location on campus.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="space-y-6">
                <div>
                    <label className="font-semibold text-gray-700 block mb-2">1. Upload Your Document</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleFileChange} />
                        <div className="text-blue-600">
                           <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOCX, PPT up to 10MB</p>
                    </div>
                    {fileName && <p className="text-center mt-4 text-gray-600">Selected file: <span className="font-semibold">{fileName}</span></p>}
                </div>

                <div>
                    <label htmlFor="location" className="font-semibold text-gray-700 block mb-2">2. Select Delivery Location</label>
                    <select id="location" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Academic Block</option>
                        <option>Hostel Block A</option>
                        <option>Hostel Block B</option>
                        <option>Library</option>
                        <option>Main Canteen</option>
                    </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md">
                    Order Print
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EcoPhotocopy;
