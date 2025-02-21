export function Checkbox({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (value: boolean) => void }) {
    return (
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    );
  }
  