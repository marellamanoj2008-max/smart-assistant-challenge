import pytest
from app import generate_event_plan

def test_wedding_plan():
    plan = generate_event_plan("Wedding", 100, 5000.0)
    assert plan["event_type"] == "Wedding"
    assert "budget_breakdown" in plan
    assert "timeline" in plan
    assert "vendor_checklist" in plan
    assert "personalized_ideas" in plan

def test_birthday_plan():
    plan = generate_event_plan("Birthday Party", 30, 1500.0)
    assert plan["budget_breakdown"]["venue"] == 600.0

def test_community_plan():
    plan = generate_event_plan("Community Event", 200, 8000.0)
    assert len(plan["vendor_checklist"]) > 0

def test_invalid_input():
    with pytest.raises(ValueError):
        generate_event_plan("", 0, -100)