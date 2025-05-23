import axios from "axios";

export const submitLead = async (req, res) => {
    try {
        const { name, email, company, message } = req.body;

        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return res.status(400).json({ message: "Invalid name. Must be at least 2 characters." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format." });
        }

        const payload = {
            name: name,
            email: email,
            company: company || 'N/A',
            message: message || 'N/A',
        };
        const n8nWebhookUrl = 'https://rakesh-koka.app.n8n.cloud/webhook-test/lead-capture';

        const n8nResponse = await axios.post(n8nWebhookUrl, payload);

        if (n8nResponse.status === 200) {
            return res.status(200).json({
                message: 'Lead submitted successfully and forwarded to n8n!',
                status: n8nResponse.status,
                data: n8nResponse.data
            });
        }
    } catch (error) {
        console.error("Error in submitLead controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
