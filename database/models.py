# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 11, 2024 20:51:44
# Database: sqlite:////tmp/tmp.6FbiW4XkC9-01JCEFXB6DN9984X4CY829SS6P/Dessert_Roadtrip_Planner/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Dessert(SAFRSBaseX, Base):
    """
    description: This table maintains a list of desserts that can be enjoyed during a road trip, with details like name and type.
    """
    __tablename__ = 'dessert'
    _s_collection_name = 'Dessert'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    type = Column(String(50))

    # parent relationships (access parent)

    # child relationships (access children)
    RoadtripDessertLinkList : Mapped[List["RoadtripDessertLink"]] = relationship(back_populates="dessert")



class Destination(SAFRSBaseX, Base):
    """
    description: This table contains details about trip destinations, including the name, region, and popularity rating.
    """
    __tablename__ = 'destination'
    _s_collection_name = 'Destination'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    region = Column(String(100), nullable=False)
    popularity_rating = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    RoadList : Mapped[List["Road"]] = relationship(back_populates="destination")



class Roadtrip(SAFRSBaseX, Base):
    """
    description: This table holds information about planned road trips, such as start date, end date, and the overall trip status.
    """
    __tablename__ = 'roadtrip'
    _s_collection_name = 'Roadtrip'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date)
    status = Column(String(50), nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    RoadtripDessertLinkList : Mapped[List["RoadtripDessertLink"]] = relationship(back_populates="roadtrip")
    RoadtripRoadLinkList : Mapped[List["RoadtripRoadLink"]] = relationship(back_populates="roadtrip")



class Road(SAFRSBaseX, Base):
    """
    description: This table represents the roads connecting various destinations, including the road name and its condition.
    """
    __tablename__ = 'road'
    _s_collection_name = 'Road'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    condition = Column(String(50), nullable=False)
    distance_km = Column(Integer, nullable=False)
    destination_id = Column(ForeignKey('destination.id'))

    # parent relationships (access parent)
    destination : Mapped["Destination"] = relationship(back_populates=("RoadList"))

    # child relationships (access children)
    RoadtripRoadLinkList : Mapped[List["RoadtripRoadLink"]] = relationship(back_populates="road")



class RoadtripDessertLink(SAFRSBaseX, Base):
    """
    description: This link table relates road trips to the desserts to be enjoyed during the trips.
    """
    __tablename__ = 'roadtrip_dessert_link'
    _s_collection_name = 'RoadtripDessertLink'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    roadtrip_id = Column(ForeignKey('roadtrip.id'))
    dessert_id = Column(ForeignKey('dessert.id'))

    # parent relationships (access parent)
    dessert : Mapped["Dessert"] = relationship(back_populates=("RoadtripDessertLinkList"))
    roadtrip : Mapped["Roadtrip"] = relationship(back_populates=("RoadtripDessertLinkList"))

    # child relationships (access children)



class RoadtripRoadLink(SAFRSBaseX, Base):
    """
    description: This link table relates road trips to the roads traveled on these trips.
    """
    __tablename__ = 'roadtrip_road_link'
    _s_collection_name = 'RoadtripRoadLink'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    roadtrip_id = Column(ForeignKey('roadtrip.id'))
    road_id = Column(ForeignKey('road.id'))

    # parent relationships (access parent)
    road : Mapped["Road"] = relationship(back_populates=("RoadtripRoadLinkList"))
    roadtrip : Mapped["Roadtrip"] = relationship(back_populates=("RoadtripRoadLinkList"))

    # child relationships (access children)
