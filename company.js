var express = require('express');
var app = express();


var EmployeeController=function (req, res) {
 
 var admin =[{ empId:"101",
			empName:"Raj",
			office:"Contoso,Mumbai",
			designation:"admin",
				salary:"70000",
				DateOfJoining:"12/06/2012"},
				
				{ empId:"102",
			empName:"Radha",
			office:"Contoso,London",
			designation:"CSE",
				salary:"30000",
				DateOfJoining:"17/02/2016"},
				
				{ empId:"103",
			empName:"ajay",
			office:"Contoso,pune",
			designation:"CSE",
				salary:"25000",
				DateOfJoining:"1/8/2018"}];
  res.send(admin);
};


app.get('/employees',EmployeeController);

var server = app.listen(7002, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Employee miicrosevice running on 7002", host, port)
})