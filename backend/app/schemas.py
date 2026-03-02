from pydantic import BaseModel, ConfigDict
from datetime import date
from typing import Optional

class ProjectBase(BaseModel):
    project_name: str
    client_id: int
    budget: float
    start_date: date
    end_date: date

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(BaseModel):
    project_name: Optional[str] = None
    client_id: Optional[int] = None
    budget: Optional[float] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None

class ProjectResponse(ProjectBase):
    project_id :int

    class Config:
        from_attributes = True

       