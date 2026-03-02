from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from app.database import Base

class Clients(Base):
    __tablename__="Clients"

    client_id = Column(Integer, primary_key=True, index=True)

class Project(Base):
    __tablename__="Projects"

    project_id= Column(Integer, primary_key=True, index=True)
    project_name= Column(String(100))
    client_id= Column(Integer, ForeignKey("Clients.client_id"))
    budget= Column(Float)
    start_date= Column(Date)
    end_date= Column(Date)
