import streamlit as st
import streamlit.components.v1 as components

import os
from dotenv import load_dotenv
load_dotenv(".env")

parent_dir = os.path.dirname(os.path.abspath(__file__))
BUILD_DIR = os.path.join(parent_dir, "frontend", "build")

if os.getenv("ENV") == "production":
    print(BUILD_DIR)
    _component_func = components.declare_component(
            "login_form",
            path=BUILD_DIR
        )

else:
    _component_func = components.declare_component(
        "login_form",
        url="http://localhost:3000" 
        )

component_value = _component_func()
