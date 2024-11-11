# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Destination(Base):
    """
    description: This table contains details about trip destinations, including the name, region, and popularity rating.
    """
    __tablename__ = 'destination'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    region = Column(String(100), nullable=False)
    popularity_rating = Column(Integer)


    roads = relationship('Road', back_populates='destination')


class Road(Base):
    """
    description: This table represents the roads connecting various destinations, including the road name and its condition.
    """
    __tablename__ = 'road'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    condition = Column(String(50), nullable=False)
    distance_km = Column(Integer, nullable=False)
    destination_id = Column(Integer, ForeignKey('destination.id'))


    destination = relationship('Destination', back_populates='roads')
    roadtrips = relationship('Roadtrip', secondary='roadtrip_road_link', back_populates='roads')


class Roadtrip(Base):
    """
    description: This table holds information about planned road trips, such as start date, end date, and the overall trip status.
    """
    __tablename__ = 'roadtrip'

    id = Column(Integer, primary_key=True, autoincrement=True)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date)
    status = Column(String(50), nullable=False)


    roads = relationship('Road', secondary='roadtrip_road_link', back_populates='roadtrips')
    desserts = relationship('Dessert', secondary='roadtrip_dessert_link', back_populates='roadtrips')


class Dessert(Base):
    """
    description: This table maintains a list of desserts that can be enjoyed during a road trip, with details like name and type.
    """
    __tablename__ = 'dessert'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    type = Column(String(50))


    roadtrips = relationship('Roadtrip', secondary='roadtrip_dessert_link', back_populates='desserts')


class RoadtripRoadLink(Base):
    """
    description: This link table relates road trips to the roads traveled on these trips.
    """
    __tablename__ = 'roadtrip_road_link'

    id = Column(Integer, primary_key=True, autoincrement=True)
    roadtrip_id = Column(Integer, ForeignKey('roadtrip.id'))
    road_id = Column(Integer, ForeignKey('road.id'))


class RoadtripDessertLink(Base):
    """
    description: This link table relates road trips to the desserts to be enjoyed during the trips.
    """
    __tablename__ = 'roadtrip_dessert_link'

    id = Column(Integer, primary_key=True, autoincrement=True)
    roadtrip_id = Column(Integer, ForeignKey('roadtrip.id'))
    dessert_id = Column(Integer, ForeignKey('dessert.id'))


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date

# Create test data

destination_1 = Destination(id=1, name='Grand Canyon', region='AZ', popularity_rating=5)
destination_2 = Destination(id=2, name='Yellowstone', region='WY', popularity_rating=4)
destination_3 = Destination(id=3, name='Yosemite', region='CA', popularity_rating=5)
destination_4 = Destination(id=4, name='Zion', region='UT', popularity_rating=3)

road_1 = Road(id=1, name='Route 66', condition='Good', distance_km=2450, destination_id=1)
road_2 = Road(id=2, name='I-80', condition='Fair', distance_km=2890, destination_id=2)
road_3 = Road(id=3, name='CA-120', condition='Excellent', distance_km=200, destination_id=3)
road_4 = Road(id=4, name='UT-9', condition='Good', distance_km=54, destination_id=4)

roadtrip_1 = Roadtrip(id=1, start_date=date(2023, 6, 15), end_date=date(2023, 6, 25), status='Planned')
roadtrip_2 = Roadtrip(id=2, start_date=date(2023, 7, 10), end_date=date(2023, 7, 20), status='Completed')
roadtrip_3 = Roadtrip(id=3, start_date=date(2023, 8, 5), end_date=date(2023, 8, 15), status='Cancelled')
roadtrip_4 = Roadtrip(id=4, start_date=date(2023, 9, 1), end_date=date(2023, 9, 10), status='Pending')

dessert_1 = Dessert(id=1, name='Ice Cream', type='Frozen')
dessert_2 = Dessert(id=2, name='Brownie', type='Baked')
dessert_3 = Dessert(id=3, name='Fruit Pie', type='Baked')
dessert_4 = Dessert(id=4, name='Gelato', type='Frozen')

roadtrip_road_link_1 = RoadtripRoadLink(id=1, roadtrip_id=1, road_id=1)
roadtrip_road_link_2 = RoadtripRoadLink(id=2, roadtrip_id=2, road_id=2)
roadtrip_road_link_3 = RoadtripRoadLink(id=3, roadtrip_id=3, road_id=3)
roadtrip_road_link_4 = RoadtripRoadLink(id=4, roadtrip_id=4, road_id=4)

roadtrip_dessert_link_1 = RoadtripDessertLink(id=1, roadtrip_id=1, dessert_id=1)
roadtrip_dessert_link_2 = RoadtripDessertLink(id=2, roadtrip_id=2, dessert_id=2)
roadtrip_dessert_link_3 = RoadtripDessertLink(id=3, roadtrip_id=3, dessert_id=3)
roadtrip_dessert_link_4 = RoadtripDessertLink(id=4, roadtrip_id=4, dessert_id=4)


session.add_all([destination_1, destination_2, destination_3, destination_4, road_1, road_2, road_3, road_4, roadtrip_1, roadtrip_2, roadtrip_3, roadtrip_4, dessert_1, dessert_2, dessert_3, dessert_4, roadtrip_road_link_1, roadtrip_road_link_2, roadtrip_road_link_3, roadtrip_road_link_4, roadtrip_dessert_link_1, roadtrip_dessert_link_2, roadtrip_dessert_link_3, roadtrip_dessert_link_4])
session.commit()
