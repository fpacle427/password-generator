"use client";

import { useState } from "react";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import "../styles/PasswordGenerator.css";

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(12);
  const [includeWord, setIncludeWord] = useState<string>("");
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(false);

  const generatePassword = () => {
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (special) charset += "!@#$%^&*()_+[]{}<>?";
    
    let generatedPassword = includeWord;
    while (generatedPassword.length < length) {
      generatedPassword += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
        
        <div className="mb-3">
          <label className="block text-sm mb-1">Password Length</label>
          <Input
            type="number"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-sm mb-1">Include Word</label>
          <Input
            type="text"
            value={includeWord}
            onChange={(e) => setIncludeWord(e.target.value)}
          />
        </div>
        
        <div className="mb-4 space-y-2">
          <label className="flex items-center space-x-2">
            <Checkbox checked={uppercase} onCheckedChange={setUppercase} />
            <span>Include Uppercase Characters</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox checked={lowercase} onCheckedChange={setLowercase} />
            <span>Include Lowercase Characters</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox checked={numbers} onCheckedChange={setNumbers} />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox checked={special} onCheckedChange={setSpecial} />
            <span>Include Special Characters</span>
          </label>
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={generatePassword}>
          Generate Password
        </Button>

        <div className="mt-4">
          <label className="block text-sm mb-1">Generated Password</label>
          <Input type="text" value={password} readOnly className="bg-gray-700" />
        </div>

        <p className="text-center text-sm mt-4 text-gray-400">
          Created by Francesca Pacle, Computer Science Student
        </p>
      </div>
    </div>
  );
}
