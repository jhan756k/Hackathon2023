from urllib import parse

print(parse.quote("2020두37536대법원"))

t = "\n나는 한준희\nhappy 변호사\n"

tlist = " | ".join(x for x in t.strip().split("\n") if x != "\n")
print(tlist)

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get(r"https://sanjaecase.comwel.or.kr/service/dataView?id=2016%EA%B5%AC%ED%95%A950595_%EC%B6%98%EC%B2%9C%EC%A7%80%EB%B0%A9%EB%B2%95%EC%9B%90%EA%B0%95%EB%A6%89%EC%A7%80%EC%9B%90")

WebDriverWait(driver, 30).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div/div[2]")))


print(driver.find_element(By.XPATH, "/html/body/div/div[2]/div[2]/div[2]").text)
driver.quit()