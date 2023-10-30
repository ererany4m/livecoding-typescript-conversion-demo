import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        descripton: "",
        maximumFuel: null,
    });

    const handleTitleChange = (e) => {
        setFormData({ ...formData, title: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setFormData({ ...formData, descripton: e.target.value });
    };

    const handleMaximumFuelChange = (e) => {
        setFormData({ ...formData, maximumFuel: e.target.value });
    };

    const handleSubmit = async (e) => {
        debugger
        e.preventDefault();

        await save(formData);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold mb-8">Create</h1>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleTitleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={handleDescriptionChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="maximumFuel" className="block text-sm font-medium text-gray-700">Maximum Fuel</label>
                <input
                    type="number"
                    id="maximumFuel"
                    name="maximumFuel"
                    onChange={handleMaximumFuelChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <button type="submit" className="bg-blue-600 px-4 py-2 rounded font-bold text-white">Save</button>
        </form>
    );
};