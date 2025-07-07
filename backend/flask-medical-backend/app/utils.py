from datetime import datetime
import json

def log_request(request):
    log_entry = {
        "timestamp": datetime.utcnow().isoformat(),
        "method": request.method,
        "path": request.path,
        "data": request.get_json() or {}
    }
    with open('request_log.json', 'a') as log_file:
        log_file.write(json.dumps(log_entry) + '\n')

def validate_conditions(conditions):
    if not isinstance(conditions, list):
        raise ValueError("Conditions must be a list.")
    for condition in conditions:
        if not isinstance(condition, str):
            raise ValueError("Each condition must be a string.")
    return True

def format_response(data):
    return {
        "status": "success",
        "data": data
    }