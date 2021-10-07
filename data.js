 const fs = require("fs");
 const addStd = (std_id, std_name, std_subject, std_degree, std_validate) => {
     const std = loadStd()

     const duplicate_id = std.filter((obj) => {
         return obj.std_id === std_id
     })

     if (duplicate_id.length === 0) {
         std.push({
             std_id,
             std_name,
             std_subject,
             std_degree,
             std_validate
         })
         savedata(std)
         console.log('saved')
     } else {
         console.log('error duplicate ids')
     }
 }

 const loadStd = () => {
     try {
         const dataBuffering = fs.readFileSync('task1.json').toString();
         return JSON.parse(dataBuffering)
     } catch (e) {
         return []
     }
 }
 const savedata = (std) => {
     const saveData = JSON.stringify(std);
     fs.writeFileSync('task1.json', saveData)
 }



 const deleteStd = (std_id) => {
     const std = loadStd()
     const savedElement = std.filter((obj) => {
         return obj.std_id !== std_id
     })
     savedata(savedElement);
     console.log('deleted')
 }
 const readItem = (std_id) => {
     const std = loadStd()
     const readedItem = std.find((obj) => {

         return obj.std_id === std_id
     })
     if (readedItem) {
         console.log(readedItem)
         console.log(readedItem.std_id)
     } else {
         console.log(' there no student with that id')
     }
 }

 const listStd = () => {
     const std = loadStd()
     std.forEach((student) => {
         console.log('the student name is' + student.std_name + 'and its degree is' + student.std_degree)
     })
 }
 const check = (std_degree) => {
     const std = loadStd()
     if (std_degree <= 100 && std_degree >= 90) {
         std.std_validate = 'Excellent'
         console.log(std.std_validate)
     } else if (std_degree < 90 && std_degree >= 85) {
         std.std_validate = 'Very good'
         console.log(std.std_validate)
     } else if (std_degree < 85 && std_degree >= 70) {
         std.std_validate = 'good'
         console.log(std.std_validate)
     } else if (std_degree < 70 && std_degree >= 60) {
         std.std_validate = 'not bad'
         console.log(std.std_validate)
     } else {
         std.std_validate = 'failed'
         console.log(std.std_validate)
     }
     savedata(std)
 }


 module.exports = {
     addStd,
     deleteStd,
     readItem,
     listStd,
     check
 }