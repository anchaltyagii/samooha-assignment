import streamlit as st
import streamlit.components.v1 as components

import os

_component_func = components.declare_component(
    "login_form",
    url="http://localhost:3000" 
    )

component_value = _component_func()
