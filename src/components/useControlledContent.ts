import { useState, useEffect } from 'react';

export function useControlledContent() {
  const [loading, setLoading] = useState(true);
  const [controlledContent, setControlledContent] = useState<string>("");

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      fetch('api/hello')
        .then((response) => response.json())
        .then((data) => {
          
          setControlledContent(data.name);
        })
        .catch((error) => {
          console.error("Error fetching content:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchContent();
  }, []);

  const handleSave = async () => {
    fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: controlledContent,
    });
    await new Promise((res) => setTimeout(res, 1000));
    alert("Content saved (simulated)");
  };

  return { loading, controlledContent, setControlledContent, handleSave };
}
