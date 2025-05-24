# 🔧 Lead Generation System - Backend

A robust Node.js backend API that processes lead submissions and integrates with n8n workflows for automated email notifications and data storage. Built with Express.js and designed for scalability and reliable performance.

## 🌟 Features

- **RESTful API**: Clean, well-structured API endpoints
- **n8n Integration**: Automated workflow processing via webhooks
- **CORS Support**: Configured for cross-origin requests
- **Error Handling**: Comprehensive error management
- **Validation**: Server-side data validation
- **Cloud Ready**: Optimized for cloud deployment

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Axios** - HTTP client for webhook calls
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Render** - Cloud deployment platform

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)
- **Git** for version control
- **n8n** workflow setup (cloud or self-hosted)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/rakeshkoka/lead-generation-system-backend.git
cd lead-generation-system-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=5000
```

### 4. Start Development Server
```bash
npm run dev
```

Your API will be available at `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── leadController.js
│   ├── routes/
│   │   └── leadRoutes.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run test suite
- `npm run lint` - Run ESLint for code quality

## 🌐 API Endpoints

### POST /api/submit-lead

Accepts lead submission data and forwards to n8n workflow.

**Request:**
```http
POST /api/submit-lead
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "message": "Interested in your services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead submitted successfully",
}
```

## 🔄 n8n Workflow Integration

The backend integrates with n8n through webhooks to automate:

### Workflow Components
1. **Webhook Trigger** - Receives lead data from backend
2. **Team Notification Email** - Sends internal notification to sales team
3. **User Thank You Email** - Sends confirmation to lead
4. **Google Sheets Storage** - Stores lead data for tracking

## 🚀 Deployment

### Deploy to Render (Recommended)

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Render Service**
   - Visit [render.com](https://render.com)
   - Create new Web Service
   - Connect your GitHub repository

3. **Configure Build Settings**
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `/`

4. **Set Environment Variables**
   ```
   PORT=5000
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Note your deployment URL (e.g., `https://your-app.onrender.com`)

## 🔐 CORS Configuration

The backend is configured to accept requests from:

```javascript
const corsOptions = {
  origin: [
    'http://localhost:5173',           // Local development
    'https://your-frontend.vercel.app' // Production frontend
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: false
};
```

Update the `origin` array with your actual frontend URLs.

## 🛡️ Security Features

- **Input Validation**: All inputs are validated and sanitized
- **CORS Protection**: Configured to allow only specified origins
- **Environment Variables**: Sensitive data stored securely
- **Error Handling**: Detailed errors logged, generic errors returned
- **Rate Limiting**: Can be easily added for production use

## 🐛 Troubleshooting

### Common Issues

**n8n Webhook Not Triggering**
```bash
# Test webhook manually
curl -X POST https://your-n8n-domain/webhook-test/lead-capture \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
```

**CORS Errors**
- Verify frontend URL in CORS configuration
- Check for trailing slashes in URLs
- Ensure protocol consistency (HTTP/HTTPS)

**Environment Variables Not Loading**
- Check `.env` file location (root directory)
- Restart server after changing `.env`
- Verify variable names match code usage

**Deployment Issues**
- Check build logs in deployment platform
- Verify all environment variables are set
- Ensure Node.js version compatibility

## 🧪 Testing

### Manual Testing
```bash
# Test lead submission
curl -X POST http://localhost:5000/api/submit-lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Corp",
    "message": "Test message"
  }'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

If you encounter any issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review server logs for detailed error information
3. Test n8n webhook independently
4. Create a GitHub issue with:
   - Error messages
   - Environment details
   - Steps to reproduce

## 🔗 Related Repositories

- [Frontend Repository](https://github.com/rakeshkoka/lead-generation-system.git)
- [Complete System Documentation](https://docs.google.com/document/d/11QkuW50WU_SNdSLQE3ywvxXIJx0ESL34/edit?usp=sharing&ouid=116430246273662677638&rtpof=true&sd=true)

---
**Live API**: [https://your-backend.onrender.com](https://lead-generation-system-backend.onrender.com)
