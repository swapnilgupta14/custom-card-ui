import React from 'react';
import { createRoot } from 'react-dom/client';
import Card from '../components/Cards/Card';

const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Card Component Demo</h1>
            <Card>
                <h2>Test Card</h2>
                <p>This is a test of the card component</p>
            </Card>

            <Card
                backgroundColor="#f0f4ff"
                padding="2rem"
                shadow="0 4px 12px rgba(0,0,0,0.1)"
            >
                <h2>Custom Card</h2>
                <p>This is a custom styled card</p>
            </Card>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);