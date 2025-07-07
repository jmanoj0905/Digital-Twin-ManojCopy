from flask import jsonify

def simulate_medication_effects(medication, condition):
    # Simulate the effects of a medication on a specific condition
    effects = {
        "aspirin": {
            "heart attack": "Reduces blood clotting, lowering the risk of heart attack.",
            "stroke": "May help prevent certain types of strokes."
        },
        "insulin": {
            "diabetes": "Helps lower blood sugar levels."
        },
        "albuterol": {
            "asthma": "Relaxes airway muscles, making it easier to breathe."
        }
    }
    return effects.get(medication.lower(), {}).get(condition.lower(), "No known effects.")

def simulate_surgery_effects(surgery):
    # Simulate the effects of a surgery
    effects = {
        "knee surgery": "Improves mobility and reduces pain in the knee joint.",
        "heart bypass": "Improves blood flow to the heart, reducing symptoms of heart disease.",
        "appendectomy": "Relieves pain and prevents complications from appendicitis."
    }
    return effects.get(surgery.lower(), "No known effects.")

def simulate_health_outcomes(medication, surgery, condition):
    medication_effect = simulate_medication_effects(medication, condition)
    surgery_effect = simulate_surgery_effects(surgery)
    
    return jsonify({
        "medication_effect": medication_effect,
        "surgery_effect": surgery_effect
    })

def simulate_effects(treatment_info):
    # Dummy implementation
    return {"result": "Simulation complete"}