import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth Route (Use POST instead of GET)
app.post('/auth', (req: Request, res: Response): void => {
    const { key: streamkey } = req.body;

    // Auth check
    if (streamkey === "password") {
        res.status(200).send();
    } else {
        res.status(403).send();
    }
});

app.get('/health', (req: Request, res: Response): void => {
    res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Auth service is running on port ${PORT}`);
});

