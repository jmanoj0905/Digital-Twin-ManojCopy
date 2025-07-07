# Flask Medical Backend

This project is a Flask-based backend application designed to map medical history to affected organs, return corresponding 2D images, simulate the effects of medications and surgeries, generate GenAI-powered health summaries, and store user records for future retrieval.

## Features

- **Organ Mapping**: Maps medical conditions to affected organs.
- **Image Service**: Provides 2D images related to medical conditions.
- **Simulation Service**: Simulates the effects of medications and surgeries.
- **GenAI Health Summaries**: Generates health summaries using Generative AI based on user medical history.
- **User Record Storage**: Stores user records for future retrieval and analysis.

## Project Structure

```
flask-medical-backend
├── app
│   ├── __init__.py
│   ├── routes.py
│   ├── models.py
│   ├── services
│   │   ├── organ_mapping.py
│   │   ├── image_service.py
│   │   ├── simulation_service.py
│   │   └── genai_summary.py
│   └── utils.py
├── migrations
│   └── README.md
├── requirements.txt
├── config.py
├── run.py
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd flask-medical-backend
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Configure the application settings in `config.py`.

## Running the Application

To run the application, execute the following command:
```
python run.py
```

The application will start on `http://127.0.0.1:5000/`.

## API Endpoints

- **POST /map-organs**: Maps medical conditions to affected organs.
- **GET /images**: Retrieves 2D images based on medical conditions.
- **POST /simulate**: Simulates the effects of medications and surgeries.
- **POST /generate-summary**: Generates a health summary based on user medical history.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.