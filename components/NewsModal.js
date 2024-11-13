import React, { useEffect } from "react";

const NewsModal = ({ isOpen, onClose }) => {
    //close modal on esc key press
    useEffect(() => {
        const closeOnEscapeKey = (e) =>
            e.key === 'Escape' ? onClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [onClose])

    //disable scroll on modal load
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

    if (!isOpen) return null
    
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div className="absolute max-h-[300px] w-full max-w-sm bg-black opacity-80">
                <div className="relative z-10 overflow-y-auto bg-white p-6">
                    <button 
                        className="absolute right-3 top-1"
                        type="button" 
                        onClick={onClose}
                    >x</button>
                    <div className="flex justify-center text-xl">se inscreva no nosso newsletter!</div>
                    <div className="flex justify-center">
                        <input 
                            className="mt-8 p-2 w-72 opacity-90 border-2 border-gray-400"
                            type="email"
                            placeholder="email"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default NewsModal;
