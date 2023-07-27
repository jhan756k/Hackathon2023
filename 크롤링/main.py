from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from openpyxl import load_workbook

baseUrl = r"https://sanjaecase.comwel.or.kr/service/dataView?id="
nameUrl = r"https://sanjaecase.comwel.or.kr/service/dataListReverse?gubun2=%EC%9E%91%EC%97%85%EC%8B%9C%EA%B0%84%EC%A4%91%EC%82%AC%EA%B3%A0&gubun=&pageUnit=200&pageIndex="

driver = webdriver.Chrome()
wb = load_workbook(filename = "크롤링\판례.xlsx")
ws = wb.active

for i in range(1):
    driver.get(nameUrl + str(i+1))
    driver.maximize_window()
    WebDriverWait(driver, 30).until(EC.presence_of_element_located(
            (By.XPATH, f'/html/body/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/table/tbody')))
    
    for j in range(200): 
        num = i * 200 + j + 1
        casetype = driver.find_element(By.XPATH, f"/html/body/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/table/tbody/tr[{j+1}]/td[2]").text
        casenum = driver.find_element(By.XPATH, f"/html/body/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/table/tbody/tr[{j+1}]/td[3]/a/span").text[1:-1]
        casenum+="_"
        casenum +=driver.find_element(By.XPATH, f"/html/body/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/table/tbody/tr[{j+1}]/td[3]/a").text.split("\n")[0]
        casename = driver.find_element(By.XPATH, f"/html/body/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/table/tbody/tr[{j+1}]/td[4]").text
        
        ws.cell(row=num, column=1).value = num
        ws.cell(row=num, column=2).value = casetype
        ws.cell(row=num, column=3).value = casenum
        ws.cell(row=num, column=4).value = casename

wb.save("result.xlsx")
driver.quit()

'''
/html/body/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/table/tbody/tr[1]/td[4]
/html/body/div/div[2]/div[2]/div/div[3]/div[2]/div[1]/table/tbody/tr[2]/td[4]

'''