"""AI Celebration & Event Planner Backend"""
import json

def generate_event_plan(event_type: str, guest_count: int, budget: float) -> dict:
    if not event_type or guest_count <= 0 or budget <= 0:
        raise ValueError("Invalid parameters.")

    budget_breakdown = {
        "venue": round(budget * 0.40, 2),
        "catering": round(budget * 0.35, 2),
        "decor": round(budget * 0.15, 2),
        "contingency": round(budget * 0.10, 2)
    }

    if "wedding" in event_type.lower():
        timeline = [{"time": "16:00", "task": "Ceremony"}, {"time": "18:00", "task": "Reception"}]
        vendors = ["Caterer", "Photographer", "Florist", "Venue Manager"]
        ideas = ["Digital guestbook", "Acoustic live music"]
    elif "birthday" in event_type.lower():
        timeline = [{"time": "17:00", "task": "Arrival"}, {"time": "19:30", "task": "Cake"}]
        vendors = ["Cake Designer", "Decorator", "Entertainer"]
        ideas = ["Themed photo booth", "Trivia game"]
    else:
        timeline = [{"time": "09:00", "task": "Setup"}, {"time": "13:00", "task": "Workshops"}]
        vendors = ["A/V Crew", "Food Trucks", "Security"]
        ideas = ["Community feedback tree", "Local artisan booths"]

    return {
        "event_type": event_type, "guest_count": guest_count, "total_budget": budget,
        "budget_breakdown": budget_breakdown, "timeline": timeline,
        "vendor_checklist": vendors, "personalized_ideas": ideas
    }