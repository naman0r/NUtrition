import time
from flask import Flask, jsonify, request
from selenium import webdriver
from selenium.webdriver.common.by import By

app = Flask(__name__)

@app.route("/hello_world", methods=["GET"])
def hello_world():
    return jsonify("HELLO WORLD")

@app.route("/get_menu", methods=["GET"])
def get_menu():
    driver = webdriver.Chrome()  # Optional argument, if not specified will search path.
    driver.get('https://www.nudining.com/public/whats-on-the-menu');

    time.sleep(7.5)

    dining_hall_dropdown = driver.find_element(By.ID, "menu-location-selector__BV_toggle_")

    date_dropdown = driver.find_element(By.ID, "menuDatePicker")
    date_dropdown.click()

    arrows = driver.find_elements(By.CLASS_NAME, "vc-svg-icon")
    arrows[0].click()

    time.sleep(2.5)

    day_button = driver.find_element(By.XPATH, "//span[contains(text(),'20')]")
    day_button.click()

    menu_items = driver.find_elements(By.CLASS_NAME, "category-items_itemNameWrapperSm_1wGbS")
    for menu_item in menu_items:
        print(menu_item.text())

    time.sleep(10)

    driver.quit()

if __name__ == '__main__':
   app.run(port=4000)