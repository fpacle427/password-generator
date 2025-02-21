export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
      />
    );
  }
  