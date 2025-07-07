from flask import Blueprint, request, jsonify
from app.services.organ_mapping import map_organs
from app.services.image_service import get_images
from app.services.simulation_service import simulate_effects
from app.services.genai_summary import generate_health_summary

app_routes = Blueprint('app_routes', __name__)

@app_routes.route('/map-organs', methods=['POST'])
def map_organs_route():
    data = request.get_json()
    conditions = data.get("conditions", [])
    affected_organs = map_organs(conditions)
    return jsonify({"affected_organs": affected_organs})

@app_routes.route('/get-images', methods=['POST'])
def get_images_route():
    data = request.get_json()
    conditions = data.get("conditions", [])
    images = get_images(conditions)
    return jsonify({"images": images})

@app_routes.route('/simulate-effects', methods=['POST'])
def simulate_effects_route():
    data = request.get_json()
    treatment_info = data.get("treatment_info", {})
    simulation_results = simulate_effects(treatment_info)
    return jsonify({"simulation_results": simulation_results})

@app_routes.route('/generate-summary', methods=['POST'])
def generate_summary_route():
    data = request.get_json()
    medical_history = data.get("medical_history", {})
    summary = generate_health_summary(medical_history)
    return jsonify({"summary": summary})