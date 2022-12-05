/*jslint browser: true*/
/*global $, jQuery, alert*/

function displaySpecificEmployees(data, status, namesFormatted) {
    'use strict';
    if (status === "success") {
        if (data.length >= 0) {
            var firstName, lastName, displayName, title, department, building, officeNumber, fax, phone, email, blnShowPhoto, facultyId;
            var xml = data;
            var xmlDoc = $.parseXML(xml);
            var $xml = $(xmlDoc);
            $xml.find("Employee").each(function (index) {
                firstName = $(this).find('FirstName').text();
                lastName = $(this).find('LastName').text();
                displayName = $(this).find('DisplayName').text();
                title = $(this).find('DisplayTitle').text();
                department = $(this).find('Department').text();
                building = $(this).find('Building').text();
                officeNumber = $(this).find('OfficeNumber').text();
                fax = $(this).find('FaxNumber').text();
                phone = $(this).find('Phone').text();
                email = $(this).find('Email').text();
                facultyId = $(this).find('FacultyId').text();
                blnShowPhoto = false;
                jQuery.each(namesFormatted, function (i, employee) {
                    
                    if (employee.firstName.trim().toLowerCase() == firstName.trim().toLowerCase() && employee.lastName.trim().toLowerCase() == lastName.trim().toLowerCase()) {
                        if (employee.displayName.trim() != "") {
                            displayName = employee.displayName;
                        }
                        if (employee.firstName.trim() != "") {
                            firstName = employee.firstName;
                        }
                        if (employee.lastName.trim() != "") {
                            lastName = employee.lastName;
                        }
                        if (employee.jobTitle.trim() != "") {
                            title = employee.jobTitle;
                        }
                        if (employee.department.trim() != "") {
                            department = employee.department;
                        }
                        if (employee.building.trim() != "") {
                            building = employee.building;
                        }
                        if (employee.officeNumber.trim() != "") {
                            officeNumber = employee.officeNumber;
                        }
                        if (employee.faxNumber.trim() != "") {
                            fax = employee.faxNumber;
                        }
                        if (employee.phoneNumber.trim() != "") {
                            phone = employee.phoneNumber;
                        }
                        if (employee.emailAddress.trim() != "") {
                            email = employee.emailAddress;
                        }
                        if (employee.photo == "y") {
                            blnShowPhoto = true;
                        }
                    }
                });

                var elementName = firstName.replace(" ", "").replace(".", "").replace("'", "").toLowerCase() + lastName.replace(" ", "").replace(".", "").replace("'", "").toLowerCase();
                
                var info = "";

                info = "<h3>" + displayName + "</h3>";
                if (title.length > 0) {
                    info += "<strong>" + title + "</strong><br />"
                }
                if (building.length > 0) {
                    if (placesURLFormatter(building).length > 0) {
                        info += "<a href='" + placesURLFormatter(building) + "'>" + building + "</a><br />";
                    } else {
                        info += building;
                    }
                }
                if (phone.length > 0) {
                    info += "<span class='phoneSpan'>Phone: " + phone + "</span><br />";
                }
                if (fax.length > 0) {
                    info += "<span class='faxSpan'>Fax: " + fax + "</span><br />";
                }
                if (email.length > 0) {
                    info += "<span class='emailSpan'><a href='mailto:" + email + "'>" + email + "</a></span>";
                }

                info += "<br/><br/><br/><a href=\"https://www.savannahstate.edu/employee-admin/employees/landing" + "\" class=\"btn-standard\">Report Error</a>";
                        
                /*if (facultyId != "00000000-0000-0000-0000-000000000000") {
                    info += "<br/><a href=\"http://www.savannahstate.edu/profiles/profile.aspx?n=" + firstName + "_" + lastName + "\" class=\"btn-standard\">view profile</a>";
                }*/
                
                if ($("#" + elementName).length === 0) {
                    var profile = "<div class='profile'>";
                    profile+="<div class='photo'><div class='profilePhotoWrapper'>";
                        if (blnShowPhoto) {
                            profile += "<img src='//www.savannahstate.edu/profiles/showImage.ashx?v=2&fname=" + firstName + "&lname=" + lastName + "' alt='" + firstName + " " + lastName + "' />";
                        } else {
                            profile += "<img src='//www.savannahstate.edu/profiles/showImage.ashx' alt='" + firstName + " " + lastName + "' />";
                        }
                        profile+="</div></div>";
                    
                        profile+="<div class='details'>";
                        profile+="<div class='info'>";
                        profile += info;
                        profile+="</div>";
                        profile+="</div>";
                        profile+="<div class='clearfix'></div>";
                        profile += "</div>"
                        $(profile).appendTo("#profiles");
                } else {
                    if (blnShowPhoto) {
                        $("<div class='profilePhotoWrapper'><img src=\"//www.savannahstate.edu/profiles/showImage.ashx?v=2&fname=" + firstName + "&lname=" + lastName + "\" alt=\"" + firstName + " " + lastName + "\" /></div>").appendTo("#" + elementName + " .photo");
                    } else {
                        $("<div class='profilePhotoWrapper'><img src='//www.savannahstate.edu/profiles/showImage.ashx' alt='" + firstName + " " + lastName + "' /></div>").appendTo("#" + elementName + " .photo");
                    }
                    

                    $(info).appendTo("#" + elementName + " .details .info");
                }
            });

            $("#employeePreloader").hide();
        }
    }
}



function displaySpecificEmployeesEmail(data, status, namesFormatted) {
    'use strict';
    if (status === "success") {
        if (data.length >= 0) {
            var firstName, lastName, displayName, title, department, building, officeNumber, fax, phone, email, blnShowPhoto, facultyId;
            var xml = data;
            var xmlDoc = $.parseXML(xml);
            var $xml = $(xmlDoc);
            
            jQuery.each(namesFormatted, function (i, employee) {

                $xml.find("Employee").each(function (index) {
                    firstName = $(this).find('FirstName').text();
                    lastName = $(this).find('LastName').text();
                    displayName = $(this).find('DisplayName').text();
                    title = $(this).find('DisplayTitle').text();
                    department = $(this).find('Department').text();
                    building = $(this).find('Building').text();
                    officeNumber = $(this).find('OfficeNumber').text();
                    fax = $(this).find('FaxNumber').text();
                    phone = $(this).find('Phone').text();
                    email = $(this).find('Email').text();
                    facultyId = $(this).find('FacultyId').text();
                    blnShowPhoto = false;

                    if (employee.emailAddress.trim().toLowerCase() == email.trim().toLowerCase()) {
                        if (employee.displayName.trim() != "") {
                            displayName = employee.displayName;
                        }
                        if (employee.firstName.trim() != "") {
                            firstName = employee.firstName;
                        }
                        if (employee.lastName.trim() != "") {
                            lastName = employee.lastName;
                        }
                        if (employee.jobTitle.trim() != "") {
                            title = employee.jobTitle;
                        }
                        if (employee.department.trim() != "") {
                            department = employee.department;
                        }
                        if (employee.building.trim() != "") {
                            building = employee.building;
                        }
                        if (employee.officeNumber.trim() != "") {
                            officeNumber = employee.officeNumber;
                        }
                        if (employee.faxNumber.trim() != "") {
                            fax = employee.faxNumber;
                        }
                        if (employee.phoneNumber.trim() != "") {
                            phone = employee.phoneNumber;
                        }
                        if (employee.emailAddress.trim() != "") {
                            email = employee.emailAddress;
                        }
                        if (employee.photo == "y") {
                            blnShowPhoto = true;
                        }




                        var elementName = firstName.replace(" ", "").replace(".", "").replace("'", "").toLowerCase() + lastName.replace(" ", "").replace(".", "").replace("'", "").toLowerCase();

                        var info = "";

                        info = "<h3>" + displayName + "</h3>";
                        if (title.length > 0) {
                            info += "<strong>" + title + "</strong><br />"
                        }
                        if (building.length > 0) {
                            if (placesURLFormatter(building).length > 0) {
                                info += "<a href='" + placesURLFormatter(building) + "'>" + building + "</a><br />";
                            } else {
                                info += building;
                            }
                        }
                        if (phone.length > 0) {
                            info += "Phone: " + phone + "<br />";
                        }
                        if (fax.length > 0) {
                            info += "Fax: " + fax + "<br />";
                        }
                        if (email.length > 0) {
                            info += "<a href='mailto:" + email + "'>" + email + "</a>";
                        }

                        info += "<br/><br/><br/><a href=\"https://www.savannahstate.edu/employee-admin/employees/landing" + "\" class=\"btn-standard\">Report Error</a>";
                        
                        /*if (facultyId != "00000000-0000-0000-0000-000000000000") {
                            info += "<br/><a href=\"http://www.savannahstate.edu/profiles/profile.aspx?n=" + firstName + "_" + lastName + "\" class=\"btn-standard\">view profile</a>";
                        }*/

                        if ($("#" + elementName).length === 0) {
                            var profile = "<div class='profile'>";
                            profile += "<div class='photo'><div class='profilePhotoWrapper'>";
                            if (blnShowPhoto) {
                                profile += "<img src='//www.savannahstate.edu/profiles/showImage.ashx?v=2&fname=" + firstName + "&lname=" + lastName + "' alt='" + firstName + " " + lastName + "' />";
                            } else {
                                profile += "<img src='//www.savannahstate.edu/profiles/showImage.ashx' alt='" + firstName + " " + lastName + "' />";
                            }
                            profile += "</div></div>";

                            profile += "<div class='details'>";
                            profile += "<div class='info'>";
                            profile += info;
                            profile += "</div>";
                            profile += "</div>";
                            profile += "<div class='clearfix'></div>";
                            profile += "</div>"
                            $(profile).appendTo("#profiles");
                        } else {
                            if (blnShowPhoto) {
                                $("<div class='profilePhotoWrapper'><img src=\"//www.savannahstate.edu/profiles/showImage.ashx?v=2&fname=" + firstName + "&lname=" + lastName + "\" alt=\"" + firstName + " " + lastName + "\" /></div>").appendTo("#" + elementName + " .photo");
                            } else {
                                $("<div class='profilePhotoWrapper'><img src='//www.savannahstate.edu/profiles/showImage.ashx' alt='" + firstName + " " + lastName + "' /></div>").appendTo("#" + elementName + " .photo");
                            }


                            $(info).appendTo("#" + elementName + " .details .info");
                        }


                    }
                });
            });
            $("#employeePreloader").hide();
        }
    }
}


function displaySpecificEmployeesPosition(data, status, namesFormatted) {
    'use strict';
    if (status === "success") {
        if (data.length >= 0) {
            var firstName, lastName, displayName, title, department, building, officeNumber, fax, phone, email, blnShowPhoto, facultyId;
            var xml = data;
            var xmlDoc = $.parseXML(xml);
            var $xml = $(xmlDoc);

            jQuery.each(namesFormatted, function (i, employee) {
                
                $xml.find("Employee").each(function (index) {
                    firstName = $(this).find('FirstName').text();
                    lastName = $(this).find('LastName').text();
                    displayName = $(this).find('DisplayName').text();
                    title = $(this).find('DisplayTitle').text();
                    department = $(this).find('Department').text();
                    building = $(this).find('Building').text();
                    officeNumber = $(this).find('OfficeNumber').text();
                    fax = $(this).find('FaxNumber').text();
                    phone = $(this).find('Phone').text();
                    email = $(this).find('Email').text();
                    facultyId = $(this).find('FacultyId').text();
                    blnShowPhoto = false;

                    if (title.trim().toLowerCase().indexOf(employee.jobTitle.trim().toLowerCase())>-1) {
                        if (employee.displayName.trim() != "") {
                            displayName = employee.displayName;
                        }
                        if (employee.firstName.trim() != "") {
                            firstName = employee.firstName;
                        }
                        if (employee.lastName.trim() != "") {
                            lastName = employee.lastName;
                        }
                        
                        if (employee.department.trim() != "") {
                            department = employee.department;
                        }
                        if (employee.building.trim() != "") {
                            building = employee.building;
                        }
                        if (employee.officeNumber.trim() != "") {
                            officeNumber = employee.officeNumber;
                        }
                        if (employee.faxNumber.trim() != "") {
                            fax = employee.faxNumber;
                        }
                        if (employee.phoneNumber.trim() != "") {
                            phone = employee.phoneNumber;
                        }
                        if (employee.emailAddress.trim() != "") {
                            email = employee.emailAddress;
                        }
                        if (employee.photo == "y") {
                            blnShowPhoto = true;
                        }




                        var elementName = firstName.replace(" ", "").replace(".", "").replace("'", "").toLowerCase() + lastName.replace(" ", "").replace(".", "").replace("'", "").toLowerCase();

                        var info = "";

                        info = "<h3>" + displayName + "</h3>";
                        if (title.length > 0) {
                            info += "<strong>" + title + "</strong><br />"
                        }
                        if (building.length > 0) {
                            if (placesURLFormatter(building).length > 0) {
                                info += "<a href='" + placesURLFormatter(building) + "'>" + building + "</a><br />";
                            } else {
                                info += building;
                            }
                        }
                        if (phone.length > 0) {
                            info += "Phone: " + phone + "<br />";
                        }
                        if (fax.length > 0) {
                            info += "Fax: " + fax + "<br />";
                        }
                        if (email.length > 0) {
                            info += "<a href='mailto:" + email + "'>" + email + "</a>";
                        }
                        
                        info += "<br/><br/><br/><a href=\"https://www.savannahstate.edu/employee-admin/employees/landing" + "\" class=\"btn-standard\">Report Error</a>";
                        
                        /*if (facultyId != "00000000-0000-0000-0000-000000000000") {
                            info += "<br/><a href=\"http://www.savannahstate.edu/profiles/profile.aspx?n=" + firstName + "_" + lastName + "\" class=\"btn-standard\">view profile</a>";
                        }*/

                        if ($("#" + elementName).length === 0) {
                            var profile = "<div class='profile'>";
                            profile += "<div class='photo'><div class='profilePhotoWrapper'>";
                            if (blnShowPhoto) {
                                profile += "<img src='//www.savannahstate.edu/profiles/showImage.ashx?v=2&fname=" + firstName + "&lname=" + lastName + "' alt='" + firstName + " " + lastName + "' />";
                            } else {
                                profile += "<img src='//www.savannahstate.edu/profiles/showImage.ashx' alt='" + firstName + " " + lastName + "' />";
                            }
                            profile += "</div></div>";

                            profile += "<div class='details'>";
                            profile += "<div class='info'>";
                            profile += info;
                            profile += "</div>";
                            profile += "</div>";
                            profile += "<div class='clearfix'></div>";
                            profile += "</div>"
                            $(profile).appendTo("#profiles");
                        } else {
                            if (blnShowPhoto) {
                                $("<div class='profilePhotoWrapper'><img src=\"//www.savannahstate.edu/profiles/showImage.ashx?v=2&fname=" + firstName + "&lname=" + lastName + "\" alt=\"" + firstName + " " + lastName + "\" /></div>").appendTo("#" + elementName + " .photo");
                            } else {
                                $("<div class='profilePhotoWrapper'><img src='//www.savannahstate.edu/profiles/showImage.ashx' alt='" + firstName + " " + lastName + "' /></div>").appendTo("#" + elementName + " .photo");
                            }


                            $(info).appendTo("#" + elementName + " .details .info");
                        }


                    }
                });
            });
            $("#employeePreloader").hide();
        }
    }
}


function getSpecificEmployees(namesFormatted) {
    'use strict';
    var JSONnames = [];
    for (var i = 0; i < namesFormatted.length; i++) {
        JSONnames.push({
            FirstName : namesFormatted[i].firstName,
            LastName : namesFormatted[i].lastName
        });
    }

    var url = domainName + "EmployeeService.asmx/GetSpecificEmployees?JSONnames=" + JSON.stringify(JSONnames);
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        //alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () { displaySpecificEmployees(xhr.responseText, "success", namesFormatted); };

    xhr.onerror = function () {
        streamError();
    };

    xhr.send();
}

function getSpecificEmployeesByEmail(employees) {
    'use strict';
    var emails = "";
    for (var i = 0; i < employees.length; i++) {
        if (emails.length == 0) {
            emails = employees[i].emailAddress;
        } else {
            emails += "," + employees[i].emailAddress;
        }
    }

    var url = domainName + "EmployeeService.asmx/GetSpecificEmployeesByEmail?v=1&emails=" + emails;
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        //alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () { displaySpecificEmployeesEmail(xhr.responseText, "success", employees); };

    xhr.onerror = function () {
        streamError();
    };

    xhr.send();
}

function getSpecificEmployeesByPosition(positions) {
    'use strict';
    var JSONnames = [];
    for (var i = 0; i < positions.length; i++) {
        JSONnames.push({
            Title: positions[i].jobTitle
        });
    }
    
    var url = domainName + "EmployeeService.asmx/GetSpecificEmployeesByTitle?allowDuplicate=false&JSONnames=" + JSON.stringify(JSONnames);
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        //alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () { displaySpecificEmployeesPosition(xhr.responseText, "success", positions); };

    xhr.onerror = function () {
        streamError();
    };

    xhr.send();
}



function employee(first, last, fullName, title, dept, build, office, fax, phone, email, additionalInfo, showPhoto) {
    this.firstName = first;
    this.lastName = last;
    this.displayName = fullName;
    this.jobTitle = title;
    this.department = dept;
    this.building = build;
    this.officeNumber = office;
    this.faxNumber = fax;
    this.phoneNumber = phone;
    this.emailAddress = email;
    this.photo = showPhoto;
}

var employees = [];