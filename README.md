# Vercel Flask HTML Rendering Project

## Overview
A simple Flask web application designed to be deployed on Vercel, rendering a basic HTML template.

## Prerequisites
- Python 3.8+
- Vercel CLI (optional)

## Local Development
1. Clone the repository
2. Create a virtual environment
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Run the application
```bash
flask run
```

## Deployment
Deploy directly to Vercel by connecting your GitHub repository or using Vercel CLI.

### Vercel CLI Deployment
```bash
vercel
```

## Project Structure
- `app.py`: Main Flask application
- `templates/index.html`: HTML template
- `requirements.txt`: Python dependencies
- `vercel.json`: Vercel deployment configuration

## Technologies
- Flask
- Vercel
- Python
