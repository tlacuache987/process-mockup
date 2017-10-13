(function(angular) {

	angular.module("myApp.controllers").controller("AppController",
			AppController);

	function AppController($scope, ProcessStatusService, ConfigService, $interval, $timeout) {
		
		var vm = this;
		vm.processItems = [
			{
				 id: 1,
				 label: "COSPLN to FINALWRK Actuals"
			},
			{
				 id: 2,
				 label: "COSPLN to FINALWRK Budget"
			},
			{
				 id: 3,
				 label: "COSPLN to FINALWRK Forecast"
			}
		];
		
		vm.stepsStatus = {
			processId: 1,
			steps: [
				{
					stepNumber: 1,
					scripts: [
						{
							order: 1,
							stepDescription: "Master Script",
							scriptName: "datasync.sh",
							processType: "Shell Script",
							processOwner: "Scott Smith",
							processStatus: "done",
							error: false
						}
					]
				},
				{
					stepNumber: 2,
					scripts: [
						{
							order: 1,
							stepDescription: "Call Export Script",
							scriptName: "export_source.sh",
							processType: "Report Script",
							processOwner: "Scott Smith",
							processStatus: "done",
							error: false
						},
						{
							order: 2,
							stepDescription: "Call Export Script",
							scriptName: "Ex_FnIA",
							processType: "Calc Script",
							processOwner: "Sasi Makkena",
							processStatus: "error",
							error: true
						}
					]
				},
				{
					stepNumber: 3,
					scripts: [
						{
							order: 1,
							stepDescription: "Load to IZ, Map & Validate",
							scriptName: "SP_DS_COSPLN_FINALRPT_ACTL",
							processType: "Oracle Stored Procedure",
							processOwner: "Scott Smith",
							processStatus: "done",
							error: false
						}
					]
				},
				{
					stepNumber: 4,
					scripts: [
						{
							order: 1,
							stepDescription: "Load to Essbase",
							scriptName: "load_essbase.sh",
							processType: "Shell Script",
							processOwner: "Scott Smith",
							processStatus: "done",
							error: false
						},
						{
							order: 2,
							stepDescription: "Clear",
							scriptName: "Clear_FinalWRK_COSPLN.mxl",
							processType: "MDX Script",
							processOwner: "Sasi Makkena",
							processStatus: "error",
							error: true
						},
						{
							order: 3,
							stepDescription: "Load",
							scriptName: "DSCOSACT",
							processType: "Load Rule",
							processOwner: "Scott Smith",
							processStatus: "error",
							error: true
						}
					]
				},
				{
					stepNumber: 5,
					scripts: [
						{
							order: 1,
							stepDescription: "Export Data with Invalid Members",
							scriptName: "export_errors.sh",
							processType: "Shell Script",
							processOwner: "Scott Smith",
							processStatus: "done",
							error: false
						}
					]
				}
				,
				{
					stepNumber: 6,
					scripts: [
						{
							order: 1,
							stepDescription: "Send Emails with error file",
							scriptName: "email_failure.sh",
							processType: "Shell Script",
							processOwner: "Scott Smith",
							processStatus: "error",
							error: true
						}
					]
				}
			]
		}
		
	}
	
}(angular));