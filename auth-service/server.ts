import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/auth', (req: Request, res: Response) => {
    const streamkey = req.body.key;

    // auth check
    if (streamkey === "password") {
        res.status(200).send();
        return;
    }
    res.status(403).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

