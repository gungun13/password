import React, { useState, useEffect, useCallback } from 'react';

export const Pswrd = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(5);
    const [numberPassword, setNumberPassword] = useState(false);
    const [charPassword, setCharPassword] = useState(false);

    useEffect(() => {
      const PasswordGenerator = () => {
          let pass = '';
          let str = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm';
          if (numberPassword) str += '0123456789';
          if (charPassword) str += '!@#$%^&*()';
          if (numberPassword && charPassword) str += '0123456789!@#$%^&*';

          for (let i = 1; i <= length; i++) {
              let char = Math.floor(Math.random() * str.length);
              pass += str.charAt(char);
          }
          setPassword(pass);
      };

      PasswordGenerator();
  }, [length, numberPassword, charPassword]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-md border rounded-md bg-white mt-8">
            <h1 className="text-4xl text-center mb-4">Password Generator</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={password}
                    placeholder="Generated Password"
                    readOnly
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Password Length: {length}</label>
                <input
                    type="range"
                    value={length}
                    min={5}
                    max={100}
                    className="w-full cursor-pointer"
                    onChange={(e) => {
                        setLength(parseInt(e.target.value));
                    }}
                />
            </div>
            <div className="mb-4">
                <input
                    type="checkbox"
                    checked={numberPassword}
                    onChange={() => {
                        setNumberPassword((prev) => !prev);
                    }}
                    className="mr-2"
                />
                <label className="inline-block">Include Numbers</label>
            </div>
            <div className="mb-4">
                <input
                    type="checkbox"
                    checked={charPassword}
                    onChange={() => {
                        setCharPassword((prev) => !prev);
                    }}
                    className="mr-2"
                />
                <label className="inline-block">Include Special Characters</label>
            </div>
        </div>
    );
};

