from flask import jsonify

organ_map = {
    "diabetes": ["pancreas", "kidneys", "eyes"],
    "asthma": ["lungs"],
    "knee surgery": ["knee joint"],
    "heart attack": ["heart"],
    "stroke": ["brain"],
}

def map_organs(conditions):
    affected_organs = set()
    for condition in conditions:
        organs = organ_map.get(condition.lower(), [])
        affected_organs.update(organs)
    return list(affected_organs)