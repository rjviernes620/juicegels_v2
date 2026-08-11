# Use the official lightweight Python image.
# https://hub.docker.com/_/python
FROM python:3.11-slim

# Allow statements and log messages to immediately appear in the logs
ENV PYTHONUNBUFFERED True

# Set working directory inside the container
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend files
COPY . ./

# Run the web service on container startup.
# We bind to the port defined by Cloud Run ($PORT) and run with gunicorn.
# The server entrypoint is server:app.
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 server:app
