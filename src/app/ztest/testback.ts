import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ztest',
  templateUrl: './ztest.component.html',
  styleUrls: ['./ztest.component.css']
})
export class ZtestComponent implements OnInit {

  devlop:any[] =[];
  devlopPresent:any[] = [];
  devPresent: any[]=[];
  devPresentValue: any;
  texonomy:any[]=[];
  devData:any;
  devType: any[]=[];
  ultimates: any[]=[];
  // texonomy1: any[]=[];
  // texonom: any[]=[];
  texonom1: any[]=[];
  // texonom2: any[]=[];
  // indicator2: any[]=[];
  indicator1: any[]=[];
  question1: any;
  // question2: any;
  country1: any[]=[];
  // country2: any[]=[];
  queStatus1: any
  queStatus2: any


  response:any = {
    "Present Development": {   
      "Readiness": {
        "Healthcare Governance": {    
          "National Healthcare Policy/National Healthcare Act ": {
            "Does the Country have a National Healthcare Strategy? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Does the Country have a National Healthcare Strategy? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Does the Country have a National Healthcare Strategy? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Is the National Healthcare strategy Updated?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Is the National Healthcare strategy Updated?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Is the National Healthcare strategy Updated?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Is it a Short Term Strategy (Duration <=5)?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Is it a Short Term Strategy (Duration <=5)?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Is it a Short Term Strategy (Duration <=5)?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Does the National Healthcare Strategy Focus on Strengthening Digital Dimensions in Healthcare?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Does the National Healthcare Strategy Focus on Strengthening Digital Dimensions in Healthcare?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13534,
                "indicator_name": "National Healthcare Policy/National Healthcare Act ",
                "indicator_score": 25,
                "question": "Does the National Healthcare Strategy Focus on Strengthening Digital Dimensions in Healthcare?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Health financing strategies & plans ": {
            "Does the Government Provide Healthcare Financial Coverage? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13537,
                "indicator_name": "Health financing strategies & plans ",
                "indicator_score": 20,
                "question": "Does the Government Provide Healthcare Financial Coverage? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13537,
                "indicator_name": "Health financing strategies & plans ",
                "indicator_score": 20,
                "question": "Does the Government Provide Healthcare Financial Coverage? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Is Healthcare financed only by the Government ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13537,
                "indicator_name": "Health financing strategies & plans ",
                "indicator_score": 20,
                "question": "Is Healthcare financed only by the Government ",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13537,
                "indicator_name": "Health financing strategies & plans ",
                "indicator_score": 20,
                "question": "Is Healthcare financed only by the Government ",
                "question_score": 4,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Is the Healthcare both publicly and privately financed ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13537,
                "indicator_name": "Health financing strategies & plans ",
                "indicator_score": 20,
                "question": "Is the Healthcare both publicly and privately financed ",
                "question_score": 6,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13537,
                "indicator_name": "Health financing strategies & plans ",
                "indicator_score": 20,
                "question": "Is the Healthcare both publicly and privately financed ",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              }
            ]
          },
          "Country has the Universal Health coverage as per policy ": {
            "Has the Country Achieved Universal Health Coverage?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13539,
                "indicator_name": "Country has the Universal Health coverage as per policy ",
                "indicator_score": 15,
                "question": "Has the Country Achieved Universal Health Coverage?",
                "question_score": 9,
                "status": "Yes",
                "actual_score": 9
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13539,
                "indicator_name": "Country has the Universal Health coverage as per policy ",
                "indicator_score": 15,
                "question": "Has the Country Achieved Universal Health Coverage?",
                "question_score": 9,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Does the Country have a Universal or Federal Health Insurance Plan for Achieving Universal Health Coverage?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13539,
                "indicator_name": "Country has the Universal Health coverage as per policy ",
                "indicator_score": 15,
                "question": "Does the Country have a Universal or Federal Health Insurance Plan for Achieving Universal Health Coverage?",
                "question_score": 4,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13539,
                "indicator_name": "Country has the Universal Health coverage as per policy ",
                "indicator_score": 15,
                "question": "Does the Country have a Universal or Federal Health Insurance Plan for Achieving Universal Health Coverage?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              }
            ],
            "Is the Country Working Towards Achieving Universal Health Coverage?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13539,
                "indicator_name": "Country has the Universal Health coverage as per policy ",
                "indicator_score": 15,
                "question": "Is the Country Working Towards Achieving Universal Health Coverage?",
                "question_score": 2,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13539,
                "indicator_name": "Country has the Universal Health coverage as per policy ",
                "indicator_score": 15,
                "question": "Is the Country Working Towards Achieving Universal Health Coverage?",
                "question_score": 2,
                "status": "Yes",
                "actual_score": 2
              }
            ]
          },
          "Laws on Health-data privacy and confidentiality ": {
            "Does the Country have a Law to Protect Personal, Sensitive or Health Data of its Citizens? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13542,
                "indicator_name": "Laws on Health-data privacy and confidentiality ",
                "indicator_score": 15,
                "question": "Does the Country have a Law to Protect Personal, Sensitive or Health Data of its Citizens? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13542,
                "indicator_name": "Laws on Health-data privacy and confidentiality ",
                "indicator_score": 15,
                "question": "Does the Country have a Law to Protect Personal, Sensitive or Health Data of its Citizens? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ]
          },
          "Policy for Controlling Diseases/Disease prevention ": {
            "Does the Country have National Strategy for Controlling Diseases?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13543,
                "indicator_name": "Policy for Controlling Diseases/Disease prevention ",
                "indicator_score": 15,
                "question": "Does the Country have National Strategy for Controlling Diseases?",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13543,
                "indicator_name": "Policy for Controlling Diseases/Disease prevention ",
                "indicator_score": 15,
                "question": "Does the Country have National Strategy for Controlling Diseases?",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              }
            ],
            "Does the Strategy Focus on both the Communicable and Non-Communicable Diseases": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13543,
                "indicator_name": "Policy for Controlling Diseases/Disease prevention ",
                "indicator_score": 15,
                "question": "Does the Strategy Focus on both the Communicable and Non-Communicable Diseases",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13543,
                "indicator_name": "Policy for Controlling Diseases/Disease prevention ",
                "indicator_score": 15,
                "question": "Does the Strategy Focus on both the Communicable and Non-Communicable Diseases",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Does the Strategy Focus on either Communicable or Non-Communicable Diseases ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13543,
                "indicator_name": "Policy for Controlling Diseases/Disease prevention ",
                "indicator_score": 15,
                "question": "Does the Strategy Focus on either Communicable or Non-Communicable Diseases ",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13543,
                "indicator_name": "Policy for Controlling Diseases/Disease prevention ",
                "indicator_score": 15,
                "question": "Does the Strategy Focus on either Communicable or Non-Communicable Diseases ",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Agency for new drug regulations and approval ": {
            "Is there a Central Agency for Drug and Medical Devices Regulation and Approval in the Country? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13547,
                "indicator_name": "Agency for new drug regulations and approval ",
                "indicator_score": 10,
                "question": "Is there a Central Agency for Drug and Medical Devices Regulation and Approval in the Country? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13547,
                "indicator_name": "Agency for new drug regulations and approval ",
                "indicator_score": 10,
                "question": "Is there a Central Agency for Drug and Medical Devices Regulation and Approval in the Country? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          }
        },
        "IT Governance": {
          "Interoperability Framework ": {
            "Does the ICT strategy has the Interoperability Framework ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13540,
                "indicator_name": "Interoperability Framework ",
                "indicator_score": 10,
                "question": "Does the ICT strategy has the Interoperability Framework ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13540,
                "indicator_name": "Interoperability Framework ",
                "indicator_score": 10,
                "question": "Does the ICT strategy has the Interoperability Framework ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "National ICT Policy ": {
            "Does the Country have a National ICT Policy? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Does the Country have a National ICT Policy? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Does the Country have a National ICT Policy? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Is the National ICT Policy Updated?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Is the National ICT Policy Updated?",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Is the National ICT Policy Updated?",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              }
            ],
            "Is it a Short Term Strategy (Duration <=5) ?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Is it a Short Term Strategy (Duration <=5) ?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Is it a Short Term Strategy (Duration <=5) ?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Does the National ICT Strategy Focus on strengthening network infrastructure?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Does the National ICT Strategy Focus on strengthening network infrastructure?",
                "question_score": 3,
                "status": "Yes",
                "actual_score": 3
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13548,
                "indicator_name": "National ICT Policy ",
                "indicator_score": 30,
                "question": "Does the National ICT Strategy Focus on strengthening network infrastructure?",
                "question_score": 3,
                "status": "Yes",
                "actual_score": 3
              }
            ]
          },
          "General Data Protection Regulation (GDPR)/Personal Data Protection Laws ": {
            "Is there any existing Data Protection Law? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13551,
                "indicator_name": "General Data Protection Regulation (GDPR)/Personal Data Protection Laws ",
                "indicator_score": 30,
                "question": "Is there any existing Data Protection Law? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13551,
                "indicator_name": "General Data Protection Regulation (GDPR)/Personal Data Protection Laws ",
                "indicator_score": 30,
                "question": "Is there any existing Data Protection Law? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Does the Country update/amend the Data protection law? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13551,
                "indicator_name": "General Data Protection Regulation (GDPR)/Personal Data Protection Laws ",
                "indicator_score": 30,
                "question": "Does the Country update/amend the Data protection law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13551,
                "indicator_name": "General Data Protection Regulation (GDPR)/Personal Data Protection Laws ",
                "indicator_score": 30,
                "question": "Does the Country update/amend the Data protection law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Is there any equivalent standard available in the system?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13551,
                "indicator_name": "General Data Protection Regulation (GDPR)/Personal Data Protection Laws ",
                "indicator_score": 30,
                "question": "Is there any equivalent standard available in the system?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13551,
                "indicator_name": "General Data Protection Regulation (GDPR)/Personal Data Protection Laws ",
                "indicator_score": 30,
                "question": "Is there any equivalent standard available in the system?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Law of Cybersecurity, cyberspace ": {
            "Is there any existing Cybersecurity Law? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13553,
                "indicator_name": "Law of Cybersecurity, cyberspace ",
                "indicator_score": 15,
                "question": "Is there any existing Cybersecurity Law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13553,
                "indicator_name": "Law of Cybersecurity, cyberspace ",
                "indicator_score": 15,
                "question": "Is there any existing Cybersecurity Law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the system follow privacy and encryption methodologies/Is it updated?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13553,
                "indicator_name": "Law of Cybersecurity, cyberspace ",
                "indicator_score": 15,
                "question": "Does the system follow privacy and encryption methodologies/Is it updated?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13553,
                "indicator_name": "Law of Cybersecurity, cyberspace ",
                "indicator_score": 15,
                "question": "Does the system follow privacy and encryption methodologies/Is it updated?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Governance principles by which all IT initiatives will be governed ": {
            "Does the country have Governance principles for all IT initiatives ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13554,
                "indicator_name": "Governance principles by which all IT initiatives will be governed ",
                "indicator_score": 10,
                "question": "Does the country have Governance principles for all IT initiatives ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13554,
                "indicator_name": "Governance principles by which all IT initiatives will be governed ",
                "indicator_score": 10,
                "question": "Does the country have Governance principles for all IT initiatives ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Strategy for Application of IT in Different Sectors": {
            "Is there any strategy for IT applications in various sectors": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13555,
                "indicator_name": "Strategy for Application of IT in Different Sectors",
                "indicator_score": 5,
                "question": "Is there any strategy for IT applications in various sectors",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13555,
                "indicator_name": "Strategy for Application of IT in Different Sectors",
                "indicator_score": 5,
                "question": "Is there any strategy for IT applications in various sectors",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          }
        },
        "IT Workforce & Infrastructure": {
          "Network Readiness Index ": {
            "NRI rank (1-10) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (1-10) ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (1-10) ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              }
            ],
            "NRI rank (11-20) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (11-20) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (11-20) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "NRI rank (21-40) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (21-40) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (21-40) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "NRI rank (41-60) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (41-60) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank (41-60) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "NRI rank >60": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank >60",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13550,
                "indicator_name": "Network Readiness Index ",
                "indicator_score": 25,
                "question": "NRI rank >60",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "IT Workforce -Number of STEM Graduates ": {
            "Current Percentage of STEM graduates >30% ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13557,
                "indicator_name": "IT Workforce -Number of STEM Graduates ",
                "indicator_score": 10,
                "question": "Current Percentage of STEM graduates >30% ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13557,
                "indicator_name": "IT Workforce -Number of STEM Graduates ",
                "indicator_score": 10,
                "question": "Current Percentage of STEM graduates >30% ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Current Percentage of STEM graduates <20-30%": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13557,
                "indicator_name": "IT Workforce -Number of STEM Graduates ",
                "indicator_score": 10,
                "question": "Current Percentage of STEM graduates <20-30%",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13557,
                "indicator_name": "IT Workforce -Number of STEM Graduates ",
                "indicator_score": 10,
                "question": "Current Percentage of STEM graduates <20-30%",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Current Percentage of STEM graduates <20%": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13557,
                "indicator_name": "IT Workforce -Number of STEM Graduates ",
                "indicator_score": 10,
                "question": "Current Percentage of STEM graduates <20%",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13557,
                "indicator_name": "IT Workforce -Number of STEM Graduates ",
                "indicator_score": 10,
                "question": "Current Percentage of STEM graduates <20%",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "IT Workforce - ICT skill rank ": {
            "Rank as per ICT skill <=10 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill <=10 ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill <=10 ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Rank as per ICT skill (11-20) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill (11-20) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill (11-20) ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Rank as per ICT skill (21-30) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill (21-30) ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill (21-30) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Rank as per ICT skill (31-40)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill (31-40)",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill (31-40)",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Rank as per ICT skill >40": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill >40",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13558,
                "indicator_name": "IT Workforce - ICT skill rank ",
                "indicator_score": 20,
                "question": "Rank as per ICT skill >40",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "ICT development Index ": {
            "Rank as per ICT development Index (1-10) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (1-10) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (1-10) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Rank as per ICT development Index (11-20) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (11-20) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (11-20) ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Rank as per ICT development Index (21-40) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (21-40) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (21-40) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Rank as per ICT development Index (41-60)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (41-60)",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index (41-60)",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Rank as per ICT development Index >60": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index >60",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13562,
                "indicator_name": "ICT development Index ",
                "indicator_score": 20,
                "question": "Rank as per ICT development Index >60",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Telecommunications Infrastructure Index ": {
            "TII, UN data >0.95 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data >0.95 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data >0.95 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              }
            ],
            "TII, UN data (0.90-0.95) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data (0.90-0.95) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data (0.90-0.95) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "TII, UN data (0.80-0.89) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data (0.80-0.89) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data (0.80-0.89) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "TII, UN data (0.70-0.79) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data (0.70-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data (0.70-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "TII, UN data <0.70": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data <0.70",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13565,
                "indicator_name": "Telecommunications Infrastructure Index ",
                "indicator_score": 25,
                "question": "TII, UN data <0.70",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          }
        },
        "Healthcare workforce and Infrastructure": {
          "Primary care ": {
            "Does the country have strong primary care unit? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13568,
                "indicator_name": "Primary care ",
                "indicator_score": 30,
                "question": "Does the country have strong primary care unit? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13568,
                "indicator_name": "Primary care ",
                "indicator_score": 30,
                "question": "Does the country have strong primary care unit? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "Does the country have vaccination unit, free medicine in primary care level? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13568,
                "indicator_name": "Primary care ",
                "indicator_score": 30,
                "question": "Does the country have vaccination unit, free medicine in primary care level? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13568,
                "indicator_name": "Primary care ",
                "indicator_score": 30,
                "question": "Does the country have vaccination unit, free medicine in primary care level? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Emergency Healthcare Access ": {
            "Does the country have strong emergency healthcare access? \nRural 24*7 critical care service? centralised hub? medicine, hospital ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13570,
                "indicator_name": "Emergency Healthcare Access ",
                "indicator_score": 20,
                "question": "Does the country have strong emergency healthcare access? \nRural 24*7 critical care service? centralised hub? medicine, hospital ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13570,
                "indicator_name": "Emergency Healthcare Access ",
                "indicator_score": 20,
                "question": "Does the country have strong emergency healthcare access? \nRural 24*7 critical care service? centralised hub? medicine, hospital ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ]
          },
          "Ranking on Global Health Security Index ": {
            "As per GHS index, country score >=70 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score >=70 ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score >=70 ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ],
            "As per GHS index, country score (60-69) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score (60-69) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score (60-69) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              }
            ],
            "As per GHS index, country score (50-59) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score (50-59) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score (50-59) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "As per GHS index, country score (40-49) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score (40-49) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score (40-49) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "As per GHS index, country score <40": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score <40",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13571,
                "indicator_name": "Ranking on Global Health Security Index ",
                "indicator_score": 25,
                "question": "As per GHS index, country score <40",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Existing Strategy for Increasing Skilled Professionals and Infrastructure ": {
            "Does the country have any strategy to increase skilled workforce and infrastructure ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13573,
                "indicator_name": "Existing Strategy for Increasing Skilled Professionals and Infrastructure ",
                "indicator_score": 25,
                "question": "Does the country have any strategy to increase skilled workforce and infrastructure ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13573,
                "indicator_name": "Existing Strategy for Increasing Skilled Professionals and Infrastructure ",
                "indicator_score": 25,
                "question": "Does the country have any strategy to increase skilled workforce and infrastructure ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          }
        },
        "AI Workforce/Infrastructure": {
          "National AI Strategy ": {
            "Does the Country have a National AI strategy? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13575,
                "indicator_name": "National AI Strategy ",
                "indicator_score": 25,
                "question": "Does the Country have a National AI strategy? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13575,
                "indicator_name": "National AI Strategy ",
                "indicator_score": 25,
                "question": "Does the Country have a National AI strategy? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Does the country have plan to publish AI strategy ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13575,
                "indicator_name": "National AI Strategy ",
                "indicator_score": 25,
                "question": "Does the country have plan to publish AI strategy ",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13575,
                "indicator_name": "National AI Strategy ",
                "indicator_score": 25,
                "question": "Does the country have plan to publish AI strategy ",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Does the National AI Strategy Focus on Strengthening Digital Dimensions of the country?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13575,
                "indicator_name": "National AI Strategy ",
                "indicator_score": 25,
                "question": "Does the National AI Strategy Focus on Strengthening Digital Dimensions of the country?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13575,
                "indicator_name": "National AI Strategy ",
                "indicator_score": 25,
                "question": "Does the National AI Strategy Focus on Strengthening Digital Dimensions of the country?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Framework for Ethical use of AI": {
            "Does the strategy has the guidelines of ethical use of AI?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13577,
                "indicator_name": "Framework for Ethical use of AI",
                "indicator_score": 8,
                "question": "Does the strategy has the guidelines of ethical use of AI?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13577,
                "indicator_name": "Framework for Ethical use of AI",
                "indicator_score": 8,
                "question": "Does the strategy has the guidelines of ethical use of AI?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Creating guidelines of ethical use is in progress": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13577,
                "indicator_name": "Framework for Ethical use of AI",
                "indicator_score": 8,
                "question": "Creating guidelines of ethical use is in progress",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13577,
                "indicator_name": "Framework for Ethical use of AI",
                "indicator_score": 8,
                "question": "Creating guidelines of ethical use is in progress",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Data Protection and Privacy Legislation ": {
            "Is there any existing Data Protection Law? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13580,
                "indicator_name": "Data Protection and Privacy Legislation ",
                "indicator_score": 17,
                "question": "Is there any existing Data Protection Law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13580,
                "indicator_name": "Data Protection and Privacy Legislation ",
                "indicator_score": 17,
                "question": "Is there any existing Data Protection Law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the Country update/amend the Data protection law?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13580,
                "indicator_name": "Data Protection and Privacy Legislation ",
                "indicator_score": 17,
                "question": "Does the Country update/amend the Data protection law?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13580,
                "indicator_name": "Data Protection and Privacy Legislation ",
                "indicator_score": 17,
                "question": "Does the Country update/amend the Data protection law?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Is the law up to date as per global standard?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13580,
                "indicator_name": "Data Protection and Privacy Legislation ",
                "indicator_score": 17,
                "question": "Is the law up to date as per global standard?",
                "question_score": 2,
                "status": "Yes",
                "actual_score": 2
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13580,
                "indicator_name": "Data Protection and Privacy Legislation ",
                "indicator_score": 17,
                "question": "Is the law up to date as per global standard?",
                "question_score": 2,
                "status": "Yes",
                "actual_score": 2
              }
            ]
          },
          "Existing Cybersecurity Initiatives ": {
            "Is there any existing Cybersecurity Law? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13582,
                "indicator_name": "Existing Cybersecurity Initiatives ",
                "indicator_score": 15,
                "question": "Is there any existing Cybersecurity Law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13582,
                "indicator_name": "Existing Cybersecurity Initiatives ",
                "indicator_score": 15,
                "question": "Is there any existing Cybersecurity Law? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the Country cybersecurity centre?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13582,
                "indicator_name": "Existing Cybersecurity Initiatives ",
                "indicator_score": 15,
                "question": "Does the Country cybersecurity centre?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13582,
                "indicator_name": "Existing Cybersecurity Initiatives ",
                "indicator_score": 15,
                "question": "Does the Country cybersecurity centre?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Overall AI Index ": {
            "As per Government AI readiness index, score >75 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score >75 ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score >75 ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "As per Government AI readiness index, score (70-75) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score (70-75) ",
                "question_score": 18,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score (70-75) ",
                "question_score": 18,
                "status": "No",
                "actual_score": 0
              }
            ],
            "As per Government AI readiness index, score (60-69) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score (60-69) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score (60-69) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "As per Government AI readiness index, score (50-59) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score (50-59) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score (50-59) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "As per Government AI readiness index, score <50": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score <50",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13584,
                "indicator_name": "Overall AI Index ",
                "indicator_score": 20,
                "question": "As per Government AI readiness index, score <50",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "AI infrastructure- data centres, high speed performing computers ": {
            "Country is having National data centre": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Country is having National data centre",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Country is having National data centre",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              }
            ],
            "Number of supercomputers >15 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Number of supercomputers >15 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Number of supercomputers >15 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Number of supercomputers (4-15) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Number of supercomputers (4-15) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Number of supercomputers (4-15) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of supercomputers (1-3)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Number of supercomputers (1-3)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 1,
                "ultimate_name": "Readiness",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13587,
                "indicator_name": "AI infrastructure- data centres, high speed performing computers ",
                "indicator_score": 15,
                "question": "Number of supercomputers (1-3)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          }
        }
      },
      "Availability": {
        "Healthcare Governance": {
          "Agency for monitoring policy enforcement ": {
            "Is there a National agency monitoring the policy enforcement ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13590,
                "indicator_name": "Agency for monitoring policy enforcement ",
                "indicator_score": 10,
                "question": "Is there a National agency monitoring the policy enforcement ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13590,
                "indicator_name": "Agency for monitoring policy enforcement ",
                "indicator_score": 10,
                "question": "Is there a National agency monitoring the policy enforcement ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Dedicated workforce to monitor development in local/regional level": {
            "Is there any dedicated workforce for enforcement in state/local/municipal level?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13592,
                "indicator_name": "Dedicated workforce to monitor development in local/regional level",
                "indicator_score": 5,
                "question": "Is there any dedicated workforce for enforcement in state/local/municipal level?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13592,
                "indicator_name": "Dedicated workforce to monitor development in local/regional level",
                "indicator_score": 5,
                "question": "Is there any dedicated workforce for enforcement in state/local/municipal level?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Percentage of GDP Spent on Public Health ": {
            "Total GDP expenditure value range >8 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "Total GDP expenditure value range >8 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "Total GDP expenditure value range >8 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Total GDP expenditure value range (5-8) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "Total GDP expenditure value range (5-8) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "Total GDP expenditure value range (5-8) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Total GDP expenditure value range <5": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "Total GDP expenditure value range <5",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "Total GDP expenditure value range <5",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ],
            "4. Domestic general government health expenditure (% of GDP) value >5 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "4. Domestic general government health expenditure (% of GDP) value >5 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "4. Domestic general government health expenditure (% of GDP) value >5 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "5. Domestic general government health expenditure (% of GDP) value (3-5) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "5. Domestic general government health expenditure (% of GDP) value (3-5) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "5. Domestic general government health expenditure (% of GDP) value (3-5) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "6. Domestic general government health expenditure (% of GDP) value <3": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "6. Domestic general government health expenditure (% of GDP) value <3",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13594,
                "indicator_name": "Percentage of GDP Spent on Public Health ",
                "indicator_score": 30,
                "question": "6. Domestic general government health expenditure (% of GDP) value <3",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Availability of Web based National Health portals ": {
            "Does the Country have Web based National Health Portals? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13599,
                "indicator_name": "Availability of Web based National Health portals ",
                "indicator_score": 10,
                "question": "Does the Country have Web based National Health Portals? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13599,
                "indicator_name": "Availability of Web based National Health portals ",
                "indicator_score": 10,
                "question": "Does the Country have Web based National Health Portals? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Health Insurance for Citizens ": {
            "Is the Health Insurance Available in an Equitable Manner (To every Citizen of the Country)? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is the Health Insurance Available in an Equitable Manner (To every Citizen of the Country)? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is the Health Insurance Available in an Equitable Manner (To every Citizen of the Country)? ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Is the Health Insurance for all citizen is in plan?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is the Health Insurance for all citizen is in plan?",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is the Health Insurance for all citizen is in plan?",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Is the Health Insurance Available only to low income group/elderly people?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is the Health Insurance Available only to low income group/elderly people?",
                "question_score": 4,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is the Health Insurance Available only to low income group/elderly people?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              }
            ],
            "Is there a Federal Health Insurance Fund Available?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is there a Federal Health Insurance Fund Available?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13601,
                "indicator_name": "Health Insurance for Citizens ",
                "indicator_score": 25,
                "question": "Is there a Federal Health Insurance Fund Available?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              }
            ]
          },
          "Government's Engagement with the Private Sector for Stronger Implementation of the National Health Policy ": {
            "Has the country adopted the PPP for better implementation of national health policy? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13604,
                "indicator_name": "Government's Engagement with the Private Sector for Stronger Implementation of the National Health Policy ",
                "indicator_score": 20,
                "question": "Has the country adopted the PPP for better implementation of national health policy? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13604,
                "indicator_name": "Government's Engagement with the Private Sector for Stronger Implementation of the National Health Policy ",
                "indicator_score": 20,
                "question": "Has the country adopted the PPP for better implementation of national health policy? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ]
          }
        },
        "IT Governance": {
          "National agency monitoring the policy enforcement ": {
            "Is there a National agency monitoring the policy enforcement ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13596,
                "indicator_name": "National agency monitoring the policy enforcement ",
                "indicator_score": 15,
                "question": "Is there a National agency monitoring the policy enforcement ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13596,
                "indicator_name": "National agency monitoring the policy enforcement ",
                "indicator_score": 15,
                "question": "Is there a National agency monitoring the policy enforcement ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ]
          },
          "Dedicated workforce to monitor locally/regionally": {
            "Is there any dedicated workforce for enforcement in state/local/municipal level?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13605,
                "indicator_name": "Dedicated workforce to monitor locally/regionally",
                "indicator_score": 5,
                "question": "Is there any dedicated workforce for enforcement in state/local/municipal level?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13605,
                "indicator_name": "Dedicated workforce to monitor locally/regionally",
                "indicator_score": 5,
                "question": "Is there any dedicated workforce for enforcement in state/local/municipal level?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Availability of Government Online Services ": {
            "Is there any official website for the Government services/E-service portal? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "Is there any official website for the Government services/E-service portal? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "Is there any official website for the Government services/E-service portal? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "OSI Index >0.95 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index >0.95 ",
                "question_score": 35,
                "status": "Yes",
                "actual_score": 35
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index >0.95 ",
                "question_score": 35,
                "status": "No",
                "actual_score": 0
              }
            ],
            "OSI Index (0.9-0.95) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index (0.9-0.95) ",
                "question_score": 30,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index (0.9-0.95) ",
                "question_score": 30,
                "status": "Yes",
                "actual_score": 30
              }
            ],
            "OSI Index (0.8-0.89) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index (0.8-0.89) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index (0.8-0.89) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              }
            ],
            "OSI Index (0.7-0.79) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index (0.7-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index (0.7-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "OSI Index <0.7 (20)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index <0.7 (20)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13607,
                "indicator_name": "Availability of Government Online Services ",
                "indicator_score": 50,
                "question": "OSI Index <0.7 (20)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Government Open Data Portal ": {
            "Is there any official open data portal? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13609,
                "indicator_name": "Government Open Data Portal ",
                "indicator_score": 15,
                "question": "Is there any official open data portal? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13609,
                "indicator_name": "Government Open Data Portal ",
                "indicator_score": 15,
                "question": "Is there any official open data portal? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ]
          },
          "Agencies to monitor Laws/Acts ": {
            "Is there any National agency monitoring the Law enforcement ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13611,
                "indicator_name": "Agencies to monitor Laws/Acts ",
                "indicator_score": 15,
                "question": "Is there any National agency monitoring the Law enforcement ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13611,
                "indicator_name": "Agencies to monitor Laws/Acts ",
                "indicator_score": 15,
                "question": "Is there any National agency monitoring the Law enforcement ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country have a Cyber security centre": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13611,
                "indicator_name": "Agencies to monitor Laws/Acts ",
                "indicator_score": 15,
                "question": "Does the country have a Cyber security centre",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13611,
                "indicator_name": "Agencies to monitor Laws/Acts ",
                "indicator_score": 15,
                "question": "Does the country have a Cyber security centre",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          }
        },
        "IT Workforce & Infrastructure": {
          "Broadband Connectivity ": {
            "Fixed broadband subscriptions (per 100 people) >35 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) >35 ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) >35 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Fixed broadband subscriptions (per 100 people) (25-35) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) (25-35) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) (25-35) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "Fixed broadband subscriptions (per 100 people) (15-24) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) (15-24) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) (15-24) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Fixed broadband subscriptions (per 100 people) (5-14) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) (5-14) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) (5-14) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Fixed broadband subscriptions (per 100 people) <5": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) <5",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13552,
                "indicator_name": "Broadband Connectivity ",
                "indicator_score": 25,
                "question": "Fixed broadband subscriptions (per 100 people) <5",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Mobile Subscriptions ": {
            "Mobile cellular subscriptions (per 100 people) >140 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) >140 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) >140 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Mobile cellular subscriptions (per 100 people) (130-140) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) (130-140) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) (130-140) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "Mobile cellular subscriptions (per 100 people) (120-129) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) (120-129) ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) (120-129) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Mobile cellular subscriptions (per 100 people) (100-119) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) (100-119) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) (100-119) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Mobile cellular subscriptions (per 100 people) <100": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) <100",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13556,
                "indicator_name": "Mobile Subscriptions ",
                "indicator_score": 25,
                "question": "Mobile cellular subscriptions (per 100 people) <100",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Cloud Services Usage": {
            "Has the country already adopted/launched the cloud computing service?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13560,
                "indicator_name": "Cloud Services Usage",
                "indicator_score": 8,
                "question": "Has the country already adopted/launched the cloud computing service?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13560,
                "indicator_name": "Cloud Services Usage",
                "indicator_score": 8,
                "question": "Has the country already adopted/launched the cloud computing service?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              }
            ],
            "Does the country focus on growing the cloud storage?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13560,
                "indicator_name": "Cloud Services Usage",
                "indicator_score": 8,
                "question": "Does the country focus on growing the cloud storage?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13560,
                "indicator_name": "Cloud Services Usage",
                "indicator_score": 8,
                "question": "Does the country focus on growing the cloud storage?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              }
            ]
          },
          "Internet Usage ": {
            "Individuals using the Internet (% of population) >90 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) >90 ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) >90 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Individuals using the Internet (% of population) (80-90) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) (80-90) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) (80-90) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "Individuals using the Internet (% of population) (70-79) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) (70-79) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) (70-79) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Individuals using the Internet (% of population) (60-69) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) (60-69) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) (60-69) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Individuals using the Internet (% of population) <60": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) <60",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13561,
                "indicator_name": "Internet Usage ",
                "indicator_score": 25,
                "question": "Individuals using the Internet (% of population) <60",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "5G Network": {
            "5G network is available in good extent": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13563,
                "indicator_name": "5G Network",
                "indicator_score": 7,
                "question": "5G network is available in good extent",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13563,
                "indicator_name": "5G Network",
                "indicator_score": 7,
                "question": "5G network is available in good extent",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              }
            ],
            "5G network is just launched, 2020": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13563,
                "indicator_name": "5G Network",
                "indicator_score": 7,
                "question": "5G network is just launched, 2020",
                "question_score": 2,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13563,
                "indicator_name": "5G Network",
                "indicator_score": 7,
                "question": "5G network is just launched, 2020",
                "question_score": 2,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Availability of Disruptive Technologies (IoT and AI Services)": {
            "Has the country already started to integrate IOT and AI in the different sectors?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13616,
                "indicator_name": "Availability of Disruptive Technologies (IoT and AI Services)",
                "indicator_score": 5,
                "question": "Has the country already started to integrate IOT and AI in the different sectors?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13616,
                "indicator_name": "Availability of Disruptive Technologies (IoT and AI Services)",
                "indicator_score": 5,
                "question": "Has the country already started to integrate IOT and AI in the different sectors?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "IT research hubs/labs": {
            "Does the country pose the number of Government research labs?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13624,
                "indicator_name": "IT research hubs/labs",
                "indicator_score": 5,
                "question": "Does the country pose the number of Government research labs?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13624,
                "indicator_name": "IT research hubs/labs",
                "indicator_score": 5,
                "question": "Does the country pose the number of Government research labs?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          }
        },
        "Healthcare workforce and Infrastructure": {
          "Practicing Doctors/1000 People ": {
            "Number of Practicing Doctors/1000 People range >4 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range >4 ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range >4 ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Practicing Doctors/1000 People range (3-4) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range (3-4) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range (3-4) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Practicing Doctors/1000 People range (2-2.9)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range (2-2.9)",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range (2-2.9)",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              }
            ],
            "Number of Practicing Doctors/1000 People range <2": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range <2",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13626,
                "indicator_name": "Practicing Doctors/1000 People ",
                "indicator_score": 15,
                "question": "Number of Practicing Doctors/1000 People range <2",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Practicing Nurses/1000 People ": {
            "Number of Nurses/1000 People range >12 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range >12 ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range >12 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Number of Nurses/1000 People range (10-12) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range (10-12) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range (10-12) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Nurses/1000 People range (7-9.9)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range (7-9.9)",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range (7-9.9)",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Nurses/1000 People range (5-6.9)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range (5-6.9)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range (5-6.9)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Nurses/1000 People range <5": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range <5",
                "question_score": 2,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13630,
                "indicator_name": "Practicing Nurses/1000 People ",
                "indicator_score": 15,
                "question": "Number of Nurses/1000 People range <5",
                "question_score": 2,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Number of Hospitals ": {
            "Number of Hospitals and clinics (>1000) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (>1000) ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (>1000) ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Number of Hospitals and clinics (500-1000) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (500-1000) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (500-1000) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Hospitals and clinics (200-499)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (200-499)",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (200-499)",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Hospitals and clinics (50-199)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (50-199)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13635,
                "indicator_name": "Number of Hospitals ",
                "indicator_score": 15,
                "question": "Number of Hospitals and clinics (50-199)",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Availability of Hospital Beds ": {
            "Number of Hospital Beds/1000 populations >10 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations >10 ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations >10 ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Hospital Beds/1000 populations (5-10) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations (5-10) ",
                "question_score": 12,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations (5-10) ",
                "question_score": 12,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Hospital Beds/1000 populations (3-4.9) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations (3-4.9) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations (3-4.9) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of Hospital Beds/1000 populations (2-2.9)": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations (2-2.9)",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations (2-2.9)",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Number of Hospital Beds/1000 populations <2": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations <2",
                "question_score": 2,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13639,
                "indicator_name": "Availability of Hospital Beds ",
                "indicator_score": 15,
                "question": "Number of Hospital Beds/1000 populations <2",
                "question_score": 2,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Digital Data Access in Health Care Facilities ": {
            "Does the country use digital healthcare data in good extent?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13643,
                "indicator_name": "Digital Data Access in Health Care Facilities ",
                "indicator_score": 10,
                "question": "Does the country use digital healthcare data in good extent?",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13643,
                "indicator_name": "Digital Data Access in Health Care Facilities ",
                "indicator_score": 10,
                "question": "Does the country use digital healthcare data in good extent?",
                "question_score": 7,
                "status": "Yes",
                "actual_score": 7
              }
            ],
            "Country just launched digital healthcare facilities": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13643,
                "indicator_name": "Digital Data Access in Health Care Facilities ",
                "indicator_score": 10,
                "question": "Country just launched digital healthcare facilities",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13643,
                "indicator_name": "Digital Data Access in Health Care Facilities ",
                "indicator_score": 10,
                "question": "Country just launched digital healthcare facilities",
                "question_score": 3,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Access to Critical Care, surgery, intensive": {
            "Does the country have strong critical care unit?": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13645,
                "indicator_name": "Access to Critical Care, surgery, intensive",
                "indicator_score": 5,
                "question": "Does the country have strong critical care unit?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13645,
                "indicator_name": "Access to Critical Care, surgery, intensive",
                "indicator_score": 5,
                "question": "Does the country have strong critical care unit?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Medical/Imaging devices ": {
            "Number of Medical Technology units >50 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13647,
                "indicator_name": "Medical/Imaging devices ",
                "indicator_score": 15,
                "question": "Number of Medical Technology units >50 ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13647,
                "indicator_name": "Medical/Imaging devices ",
                "indicator_score": 15,
                "question": "Number of Medical Technology units >50 ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Number of Medical Technology units <50 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13647,
                "indicator_name": "Medical/Imaging devices ",
                "indicator_score": 15,
                "question": "Number of Medical Technology units <50 ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13647,
                "indicator_name": "Medical/Imaging devices ",
                "indicator_score": 15,
                "question": "Number of Medical Technology units <50 ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Healthcare Research Hubs ": {
            "Healthcare research hubs are present ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13649,
                "indicator_name": "Healthcare Research Hubs ",
                "indicator_score": 10,
                "question": "Healthcare research hubs are present ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13649,
                "indicator_name": "Healthcare Research Hubs ",
                "indicator_score": 10,
                "question": "Healthcare research hubs are present ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          }
        },
        "AI Workforce/Infrastructure": {
          "National agency monitoring the policy enforcement ": {
            "Is there a National agency monitoring the policy enforcement ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13596,
                "indicator_name": "National agency monitoring the policy enforcement ",
                "indicator_score": 10,
                "question": "Is there a National agency monitoring the policy enforcement ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13596,
                "indicator_name": "National agency monitoring the policy enforcement ",
                "indicator_score": 10,
                "question": "Is there a National agency monitoring the policy enforcement ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "AI expertise in existing IT workforce ": {
            "As per government report, huge number of AI experts are present ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13652,
                "indicator_name": "AI expertise in existing IT workforce ",
                "indicator_score": 10,
                "question": "As per government report, huge number of AI experts are present ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13652,
                "indicator_name": "AI expertise in existing IT workforce ",
                "indicator_score": 10,
                "question": "As per government report, huge number of AI experts are present ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "As per government report, country is lacking AI experts": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13652,
                "indicator_name": "AI expertise in existing IT workforce ",
                "indicator_score": 10,
                "question": "As per government report, country is lacking AI experts",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13652,
                "indicator_name": "AI expertise in existing IT workforce ",
                "indicator_score": 10,
                "question": "As per government report, country is lacking AI experts",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Digital Infrastructure for AI ": {
            "5G network is available in good extent ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "5G network is available in good extent ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "5G network is available in good extent ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "5G network is just launched": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "5G network is just launched",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "5G network is just launched",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ],
            "TII, UN data >0.95 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data >0.95 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data >0.95 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              }
            ],
            "TII, UN data (0.90-0.95) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data (0.90-0.95) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data (0.90-0.95) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "TII, UN data (0.80-0.89) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data (0.80-0.89) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data (0.80-0.89) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "TII, UN data (0.70-0.79) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data (0.70-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data (0.70-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "TII, UN data <0.70": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data <0.70",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13655,
                "indicator_name": "Digital Infrastructure for AI ",
                "indicator_score": 35,
                "question": "TII, UN data <0.70",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Availability of data for AI Models - Open Data ": {
            "Does the country have open data source of AI models ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13661,
                "indicator_name": "Availability of data for AI Models - Open Data ",
                "indicator_score": 10,
                "question": "Does the country have open data source of AI models ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13661,
                "indicator_name": "Availability of data for AI Models - Open Data ",
                "indicator_score": 10,
                "question": "Does the country have open data source of AI models ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "AI Research Hubs ": {
            "Does the country have AI research hub? ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13663,
                "indicator_name": "AI Research Hubs ",
                "indicator_score": 10,
                "question": "Does the country have AI research hub? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13663,
                "indicator_name": "AI Research Hubs ",
                "indicator_score": 10,
                "question": "Does the country have AI research hub? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Number of companies working in AI field ": {
            "Number of AI startups >1000 ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups >1000 ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups >1000 ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ],
            "Number of AI startups (500-1000) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups (500-1000) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups (500-1000) ",
                "question_score": 20,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of AI startups (200-499) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups (200-499) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups (200-499) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of AI startups (50-199) ": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups (50-199) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups (50-199) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Number of AI startups <50": [
              {
                "c_name": "UK",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups <50",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 1,
                "development_name": "Present Development",
                "ultimate_field_id": 2,
                "ultimate_name": "Availability",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13665,
                "indicator_name": "Number of companies working in AI field ",
                "indicator_score": 25,
                "question": "Number of AI startups <50",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          }
        }
      }
    },
    "Prospective Development": {
      "Development Strategy": {
        "Healthcare Governance": {
          "Any Improvement strategy for the better quality of the healthcare ": {
            "Is there any plan to improve quality of primary healthcare? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13668,
                "indicator_name": "Any Improvement strategy for the better quality of the healthcare ",
                "indicator_score": 35,
                "question": "Is there any plan to improve quality of primary healthcare? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13668,
                "indicator_name": "Any Improvement strategy for the better quality of the healthcare ",
                "indicator_score": 35,
                "question": "Is there any plan to improve quality of primary healthcare? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Is there any plan to develop mental health strategy? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13668,
                "indicator_name": "Any Improvement strategy for the better quality of the healthcare ",
                "indicator_score": 35,
                "question": "Is there any plan to develop mental health strategy? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13668,
                "indicator_name": "Any Improvement strategy for the better quality of the healthcare ",
                "indicator_score": 35,
                "question": "Is there any plan to develop mental health strategy? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Is there plan to establish new medical treatment? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13668,
                "indicator_name": "Any Improvement strategy for the better quality of the healthcare ",
                "indicator_score": 35,
                "question": "Is there plan to establish new medical treatment? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13668,
                "indicator_name": "Any Improvement strategy for the better quality of the healthcare ",
                "indicator_score": 35,
                "question": "Is there plan to establish new medical treatment? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Any strategy to strengthen and reform health institutions, laws and regulations, including legal frameworks for universal health coverage ": {
            "Any plan for re-orientation of public hospitals?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13670,
                "indicator_name": "Any strategy to strengthen and reform health institutions, laws and regulations, including legal frameworks for universal health coverage ",
                "indicator_score": 18,
                "question": "Any plan for re-orientation of public hospitals?",
                "question_score": 8,
                "status": "Data not available",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13670,
                "indicator_name": "Any strategy to strengthen and reform health institutions, laws and regulations, including legal frameworks for universal health coverage ",
                "indicator_score": 18,
                "question": "Any plan for re-orientation of public hospitals?",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              }
            ],
            "Any plan for successful implementation/amendment of health law ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13670,
                "indicator_name": "Any strategy to strengthen and reform health institutions, laws and regulations, including legal frameworks for universal health coverage ",
                "indicator_score": 18,
                "question": "Any plan for successful implementation/amendment of health law ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13670,
                "indicator_name": "Any strategy to strengthen and reform health institutions, laws and regulations, including legal frameworks for universal health coverage ",
                "indicator_score": 18,
                "question": "Any plan for successful implementation/amendment of health law ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Any Strategy for developing latest medical advancement/eradicate any specific disease ": {
            "Any plan for improved access to MRI/CT scanning": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13673,
                "indicator_name": "Any Strategy for developing latest medical advancement/eradicate any specific disease ",
                "indicator_score": 17,
                "question": "Any plan for improved access to MRI/CT scanning",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13673,
                "indicator_name": "Any Strategy for developing latest medical advancement/eradicate any specific disease ",
                "indicator_score": 17,
                "question": "Any plan for improved access to MRI/CT scanning",
                "question_score": 5,
                "status": "Data not available",
                "actual_score": 0
              }
            ],
            "Is there any plan to improve the treatment of non-communicable disease?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13673,
                "indicator_name": "Any Strategy for developing latest medical advancement/eradicate any specific disease ",
                "indicator_score": 17,
                "question": "Is there any plan to improve the treatment of non-communicable disease?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13673,
                "indicator_name": "Any Strategy for developing latest medical advancement/eradicate any specific disease ",
                "indicator_score": 17,
                "question": "Is there any plan to improve the treatment of non-communicable disease?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              }
            ],
            "Is there any plan to improve the treatment/eradicate of communicable disease?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13673,
                "indicator_name": "Any Strategy for developing latest medical advancement/eradicate any specific disease ",
                "indicator_score": 17,
                "question": "Is there any plan to improve the treatment/eradicate of communicable disease?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13673,
                "indicator_name": "Any Strategy for developing latest medical advancement/eradicate any specific disease ",
                "indicator_score": 17,
                "question": "Is there any plan to improve the treatment/eradicate of communicable disease?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              }
            ]
          },
          "Strategy for building digital healthcare ": {
            "Is there any strategy to introduce E-health programme ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13676,
                "indicator_name": "Strategy for building digital healthcare ",
                "indicator_score": 20,
                "question": "Is there any strategy to introduce E-health programme ",
                "question_score": 12,
                "status": "Yes",
                "actual_score": 12
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13676,
                "indicator_name": "Strategy for building digital healthcare ",
                "indicator_score": 20,
                "question": "Is there any strategy to introduce E-health programme ",
                "question_score": 12,
                "status": "Yes",
                "actual_score": 12
              }
            ],
            "Any plan to improve efficiency of infrastructure by deployment of digital tools": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13676,
                "indicator_name": "Strategy for building digital healthcare ",
                "indicator_score": 20,
                "question": "Any plan to improve efficiency of infrastructure by deployment of digital tools",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13676,
                "indicator_name": "Strategy for building digital healthcare ",
                "indicator_score": 20,
                "question": "Any plan to improve efficiency of infrastructure by deployment of digital tools",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              }
            ]
          },
          "Funding development in healthcare sector ": {
            "Is there any strategy to increase public health expenditure? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13679,
                "indicator_name": "Funding development in healthcare sector ",
                "indicator_score": 10,
                "question": "Is there any strategy to increase public health expenditure? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13679,
                "indicator_name": "Funding development in healthcare sector ",
                "indicator_score": 10,
                "question": "Is there any strategy to increase public health expenditure? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          }
        },
        "IT Governance": {
          "Regulatory and Security Framework Strengthening ": {
            "Does the country have guidelines to ensure ICT security and maintaining standards ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13681,
                "indicator_name": "Regulatory and Security Framework Strengthening ",
                "indicator_score": 30,
                "question": "Does the country have guidelines to ensure ICT security and maintaining standards ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13681,
                "indicator_name": "Regulatory and Security Framework Strengthening ",
                "indicator_score": 30,
                "question": "Does the country have guidelines to ensure ICT security and maintaining standards ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country have plan to establish/promote a comprehensive data protection for digital communications ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13681,
                "indicator_name": "Regulatory and Security Framework Strengthening ",
                "indicator_score": 30,
                "question": "Does the country have plan to establish/promote a comprehensive data protection for digital communications ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13681,
                "indicator_name": "Regulatory and Security Framework Strengthening ",
                "indicator_score": 30,
                "question": "Does the country have plan to establish/promote a comprehensive data protection for digital communications ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country have plan to establish/promote the International Data Centres ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13681,
                "indicator_name": "Regulatory and Security Framework Strengthening ",
                "indicator_score": 30,
                "question": "Does the country have plan to establish/promote the International Data Centres ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13681,
                "indicator_name": "Regulatory and Security Framework Strengthening ",
                "indicator_score": 30,
                "question": "Does the country have plan to establish/promote the International Data Centres ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Integration of digital dimension in future strategies ": {
            "Does the country aim to create robust Digital Communications Infrastructure ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "Does the country aim to create robust Digital Communications Infrastructure ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "Does the country aim to create robust Digital Communications Infrastructure ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Does the country have plan to adopt modern technology for digital development ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "Does the country have plan to adopt modern technology for digital development ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "Does the country have plan to adopt modern technology for digital development ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country have plan to adopt/promote E-Government ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "Does the country have plan to adopt/promote E-Government ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "Does the country have plan to adopt/promote E-Government ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "EGDI Index >0.95 ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index >0.95 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index >0.95 ",
                "question_score": 25,
                "status": "No",
                "actual_score": 0
              }
            ],
            "EGDI Index (0.9-0.95) ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index (0.9-0.95) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index (0.9-0.95) ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "EGDI Index (0.8-0.89) ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index (0.8-0.89) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index (0.8-0.89) ",
                "question_score": 15,
                "status": "No",
                "actual_score": 0
              }
            ],
            "EGDI Index (0.6-0.79) ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index (0.6-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index (0.6-0.79) ",
                "question_score": 10,
                "status": "No",
                "actual_score": 0
              }
            ],
            "EGDI Index <0.6": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index <0.6",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13685,
                "indicator_name": "Integration of digital dimension in future strategies ",
                "indicator_score": 25,
                "question": "EGDI Index <0.6",
                "question_score": 5,
                "status": "No",
                "actual_score": 0
              }
            ]
          },
          "Identified requirements ": {
            "Does the country have already identified the fields of development? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13692,
                "indicator_name": "Identified requirements ",
                "indicator_score": 10,
                "question": "Does the country have already identified the fields of development? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13692,
                "indicator_name": "Identified requirements ",
                "indicator_score": 10,
                "question": "Does the country have already identified the fields of development? ",
                "question_score": 10,
                "status": "Data not available",
                "actual_score": 0
              }
            ]
          }
        },
        "IT Workforce & Infrastructure": {
          "Creating IT/ICT workforce ": {
            "Is there any plan to increase the number of IT workforce? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13694,
                "indicator_name": "Creating IT/ICT workforce ",
                "indicator_score": 20,
                "question": "Is there any plan to increase the number of IT workforce? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13694,
                "indicator_name": "Creating IT/ICT workforce ",
                "indicator_score": 20,
                "question": "Is there any plan to increase the number of IT workforce? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Is there any plan to train/educate people to create suitable workforce ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13694,
                "indicator_name": "Creating IT/ICT workforce ",
                "indicator_score": 20,
                "question": "Is there any plan to train/educate people to create suitable workforce ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13694,
                "indicator_name": "Creating IT/ICT workforce ",
                "indicator_score": 20,
                "question": "Is there any plan to train/educate people to create suitable workforce ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Enhancing Broadband Connectivity ": {
            "Is there any plan to promote/enhance broadband connectivity? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13697,
                "indicator_name": "Enhancing Broadband Connectivity ",
                "indicator_score": 20,
                "question": "Is there any plan to promote/enhance broadband connectivity? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13697,
                "indicator_name": "Enhancing Broadband Connectivity ",
                "indicator_score": 20,
                "question": "Is there any plan to promote/enhance broadband connectivity? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country have plan to create universal access of Broadband ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13697,
                "indicator_name": "Enhancing Broadband Connectivity ",
                "indicator_score": 20,
                "question": "Does the country have plan to create universal access of Broadband ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13697,
                "indicator_name": "Enhancing Broadband Connectivity ",
                "indicator_score": 20,
                "question": "Does the country have plan to create universal access of Broadband ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Developing 5G Infrastructure ": {
            "Does the country focus on developing 5G network? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13700,
                "indicator_name": "Developing 5G Infrastructure ",
                "indicator_score": 20,
                "question": "Does the country focus on developing 5G network? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13700,
                "indicator_name": "Developing 5G Infrastructure ",
                "indicator_score": 20,
                "question": "Does the country focus on developing 5G network? ",
                "question_score": 15,
                "status": "Yes",
                "actual_score": 15
              }
            ],
            "Does the country have separate strategy document for development of 5G?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13700,
                "indicator_name": "Developing 5G Infrastructure ",
                "indicator_score": 20,
                "question": "Does the country have separate strategy document for development of 5G?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13700,
                "indicator_name": "Developing 5G Infrastructure ",
                "indicator_score": 20,
                "question": "Does the country have separate strategy document for development of 5G?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Promoting Cybersecurity Policy ": {
            "Is there any plan to promote/enhance cybersecurity policy? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13703,
                "indicator_name": "Promoting Cybersecurity Policy ",
                "indicator_score": 10,
                "question": "Is there any plan to promote/enhance cybersecurity policy? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13703,
                "indicator_name": "Promoting Cybersecurity Policy ",
                "indicator_score": 10,
                "question": "Is there any plan to promote/enhance cybersecurity policy? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Promoting IoT and AI ": {
            "Does the country focus on promoting the disruptive technologies?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13705,
                "indicator_name": "Promoting IoT and AI ",
                "indicator_score": 10,
                "question": "Does the country focus on promoting the disruptive technologies?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13705,
                "indicator_name": "Promoting IoT and AI ",
                "indicator_score": 10,
                "question": "Does the country focus on promoting the disruptive technologies?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Does the country have separate strategy document for development/promotion of AI?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13705,
                "indicator_name": "Promoting IoT and AI ",
                "indicator_score": 10,
                "question": "Does the country have separate strategy document for development/promotion of AI?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13705,
                "indicator_name": "Promoting IoT and AI ",
                "indicator_score": 10,
                "question": "Does the country have separate strategy document for development/promotion of AI?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Promoting ICT Application in Education, Medicine, and Other Fields ": {
            "Does the country promote ICT application in various fields? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13707,
                "indicator_name": "Promoting ICT Application in Education, Medicine, and Other Fields ",
                "indicator_score": 10,
                "question": "Does the country promote ICT application in various fields? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13707,
                "indicator_name": "Promoting ICT Application in Education, Medicine, and Other Fields ",
                "indicator_score": 10,
                "question": "Does the country promote ICT application in various fields? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Digital Literacy Initiatives ": {
            "Does the country have plan to promote/enhance the Digital literacy initiatives? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13709,
                "indicator_name": "Digital Literacy Initiatives ",
                "indicator_score": 10,
                "question": "Does the country have plan to promote/enhance the Digital literacy initiatives? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13709,
                "indicator_name": "Digital Literacy Initiatives ",
                "indicator_score": 10,
                "question": "Does the country have plan to promote/enhance the Digital literacy initiatives? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          }
        },
        "Healthcare workforce and Infrastructure": {
          "Long Term Or Short Term Development Strategy": {
            "Is it a Short Term Strategy(Duration <=5) ?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13633,
                "indicator_name": "Long Term Or Short Term Development Strategy",
                "indicator_score": 8,
                "question": "Is it a Short Term Strategy(Duration <=5) ?",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13633,
                "indicator_name": "Long Term Or Short Term Development Strategy",
                "indicator_score": 8,
                "question": "Is it a Short Term Strategy(Duration <=5) ?",
                "question_score": 8,
                "status": "No",
                "actual_score": 0
              }
            ],
            "Is it a Long Term Strategy(Duration 5-10) ?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13633,
                "indicator_name": "Long Term Or Short Term Development Strategy",
                "indicator_score": 8,
                "question": "Is it a Long Term Strategy(Duration 5-10) ?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13633,
                "indicator_name": "Long Term Or Short Term Development Strategy",
                "indicator_score": 8,
                "question": "Is it a Long Term Strategy(Duration 5-10) ?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Strategy for Regulating Healthcare Infrastructure ": {
            "Does the country have plan to promote medical infrastructure? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13710,
                "indicator_name": "Strategy for Regulating Healthcare Infrastructure ",
                "indicator_score": 32,
                "question": "Does the country have plan to promote medical infrastructure? ",
                "question_score": 14,
                "status": "Yes",
                "actual_score": 14
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13710,
                "indicator_name": "Strategy for Regulating Healthcare Infrastructure ",
                "indicator_score": 32,
                "question": "Does the country have plan to promote medical infrastructure? ",
                "question_score": 14,
                "status": "Yes",
                "actual_score": 14
              }
            ],
            "Does the country focus on increasing hospital beds? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13710,
                "indicator_name": "Strategy for Regulating Healthcare Infrastructure ",
                "indicator_score": 32,
                "question": "Does the country focus on increasing hospital beds? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13710,
                "indicator_name": "Strategy for Regulating Healthcare Infrastructure ",
                "indicator_score": 32,
                "question": "Does the country focus on increasing hospital beds? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country have plan to improve availability of medical product/equipment?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13710,
                "indicator_name": "Strategy for Regulating Healthcare Infrastructure ",
                "indicator_score": 32,
                "question": "Does the country have plan to improve availability of medical product/equipment?",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13710,
                "indicator_name": "Strategy for Regulating Healthcare Infrastructure ",
                "indicator_score": 32,
                "question": "Does the country have plan to improve availability of medical product/equipment?",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              }
            ]
          },
          "Increasing/Regulating Public Healthcare Spending/Establishing Sustainable Funding Sources ": {
            "Does the country increase the sustainable healthcare funding? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13711,
                "indicator_name": "Increasing/Regulating Public Healthcare Spending/Establishing Sustainable Funding Sources ",
                "indicator_score": 10,
                "question": "Does the country increase the sustainable healthcare funding? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13711,
                "indicator_name": "Increasing/Regulating Public Healthcare Spending/Establishing Sustainable Funding Sources ",
                "indicator_score": 10,
                "question": "Does the country increase the sustainable healthcare funding? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Private Sector Collaboration": {
            "Is there any plan to develop PPP in healthcare?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13712,
                "indicator_name": "Private Sector Collaboration",
                "indicator_score": 5,
                "question": "Is there any plan to develop PPP in healthcare?",
                "question_score": 5,
                "status": "Data not available",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13712,
                "indicator_name": "Private Sector Collaboration",
                "indicator_score": 5,
                "question": "Is there any plan to develop PPP in healthcare?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Promoting Skilled Manpower in Remote Regions": {
            "Does the country have plan to promote the skilled workforce in remote/rural area (introducing quota, remuneration etc)?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13713,
                "indicator_name": "Promoting Skilled Manpower in Remote Regions",
                "indicator_score": 5,
                "question": "Does the country have plan to promote the skilled workforce in remote/rural area (introducing quota, remuneration etc)?",
                "question_score": 5,
                "status": "Data not available",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13713,
                "indicator_name": "Promoting Skilled Manpower in Remote Regions",
                "indicator_score": 5,
                "question": "Does the country have plan to promote the skilled workforce in remote/rural area (introducing quota, remuneration etc)?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Integration of Digital Dimension ": {
            "Does the country promote Electronic health record/Electronic patient card ? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13714,
                "indicator_name": "Integration of Digital Dimension ",
                "indicator_score": 25,
                "question": "Does the country promote Electronic health record/Electronic patient card ? ",
                "question_score": 12,
                "status": "Yes",
                "actual_score": 12
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13714,
                "indicator_name": "Integration of Digital Dimension ",
                "indicator_score": 25,
                "question": "Does the country promote Electronic health record/Electronic patient card ? ",
                "question_score": 12,
                "status": "Yes",
                "actual_score": 12
              }
            ],
            "Does the country promote Telemedicine ?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13714,
                "indicator_name": "Integration of Digital Dimension ",
                "indicator_score": 25,
                "question": "Does the country promote Telemedicine ?",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13714,
                "indicator_name": "Integration of Digital Dimension ",
                "indicator_score": 25,
                "question": "Does the country promote Telemedicine ?",
                "question_score": 8,
                "status": "Yes",
                "actual_score": 8
              }
            ],
            "Does the country promote the healthcare softwares ?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13714,
                "indicator_name": "Integration of Digital Dimension ",
                "indicator_score": 25,
                "question": "Does the country promote the healthcare softwares ?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13714,
                "indicator_name": "Integration of Digital Dimension ",
                "indicator_score": 25,
                "question": "Does the country promote the healthcare softwares ?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Creating More Workforce ": {
            "Is there any plan to increase the number of healthcare worker?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13715,
                "indicator_name": "Creating More Workforce ",
                "indicator_score": 10,
                "question": "Is there any plan to increase the number of healthcare worker?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13715,
                "indicator_name": "Creating More Workforce ",
                "indicator_score": 10,
                "question": "Is there any plan to increase the number of healthcare worker?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ],
            "Is there any plan to train/educate people to create suitable health worker": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13715,
                "indicator_name": "Creating More Workforce ",
                "indicator_score": 10,
                "question": "Is there any plan to train/educate people to create suitable health worker",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13715,
                "indicator_name": "Creating More Workforce ",
                "indicator_score": 10,
                "question": "Is there any plan to train/educate people to create suitable health worker",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Strengthening Primary Healthcare": {
            "Does the country have plan to strengthen the primary healthcare units?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13716,
                "indicator_name": "Strengthening Primary Healthcare",
                "indicator_score": 5,
                "question": "Does the country have plan to strengthen the primary healthcare units?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13716,
                "indicator_name": "Strengthening Primary Healthcare",
                "indicator_score": 5,
                "question": "Does the country have plan to strengthen the primary healthcare units?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          }
        },
        "AI Workforce/Infrastructure": {
          "Creation of data trusts/transparency ": {
            "Does the country focus to promote data trust/ethical use of AI? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13717,
                "indicator_name": "Creation of data trusts/transparency ",
                "indicator_score": 10,
                "question": "Does the country focus to promote data trust/ethical use of AI? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13717,
                "indicator_name": "Creation of data trusts/transparency ",
                "indicator_score": 10,
                "question": "Does the country focus to promote data trust/ethical use of AI? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Digital Infrastructure - 5G and Full Fibre Networks ": {
            "Does the country focus on developing 5G network? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13718,
                "indicator_name": "Digital Infrastructure - 5G and Full Fibre Networks ",
                "indicator_score": 20,
                "question": "Does the country focus on developing 5G network? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13718,
                "indicator_name": "Digital Infrastructure - 5G and Full Fibre Networks ",
                "indicator_score": 20,
                "question": "Does the country focus on developing 5G network? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country have separate strategy document for development of 5G?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13718,
                "indicator_name": "Digital Infrastructure - 5G and Full Fibre Networks ",
                "indicator_score": 20,
                "question": "Does the country have separate strategy document for development of 5G?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13718,
                "indicator_name": "Digital Infrastructure - 5G and Full Fibre Networks ",
                "indicator_score": 20,
                "question": "Does the country have separate strategy document for development of 5G?",
                "question_score": 6,
                "status": "Yes",
                "actual_score": 6
              }
            ],
            "Does the country focus on developing full fiber networks?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13718,
                "indicator_name": "Digital Infrastructure - 5G and Full Fibre Networks ",
                "indicator_score": 20,
                "question": "Does the country focus on developing full fiber networks?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13718,
                "indicator_name": "Digital Infrastructure - 5G and Full Fibre Networks ",
                "indicator_score": 20,
                "question": "Does the country focus on developing full fiber networks?",
                "question_score": 4,
                "status": "Yes",
                "actual_score": 4
              }
            ]
          },
          "AI Infrastructure ": {
            "Does the country promote infrastructure for AI research? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13719,
                "indicator_name": "AI Infrastructure ",
                "indicator_score": 15,
                "question": "Does the country promote infrastructure for AI research? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13719,
                "indicator_name": "AI Infrastructure ",
                "indicator_score": 15,
                "question": "Does the country promote infrastructure for AI research? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country promote the possession of supercomputers?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13719,
                "indicator_name": "AI Infrastructure ",
                "indicator_score": 15,
                "question": "Does the country promote the possession of supercomputers?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13719,
                "indicator_name": "AI Infrastructure ",
                "indicator_score": 15,
                "question": "Does the country promote the possession of supercomputers?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Open source software libraries and toolkits ": {
            "Does the country focus on building/promotion of open source of software libraries? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13720,
                "indicator_name": "Open source software libraries and toolkits ",
                "indicator_score": 10,
                "question": "Does the country focus on building/promotion of open source of software libraries? ",
                "question_score": 10,
                "status": "Data not available",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13720,
                "indicator_name": "Open source software libraries and toolkits ",
                "indicator_score": 10,
                "question": "Does the country focus on building/promotion of open source of software libraries? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "AI Talent Development ": {
            "Do the universities float the STEM/AI courses? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13721,
                "indicator_name": "AI Talent Development ",
                "indicator_score": 15,
                "question": "Do the universities float the STEM/AI courses? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13721,
                "indicator_name": "AI Talent Development ",
                "indicator_score": 15,
                "question": "Do the universities float the STEM/AI courses? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ],
            "Does the country organize workshops to upskill the AI workforce?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13721,
                "indicator_name": "AI Talent Development ",
                "indicator_score": 15,
                "question": "Does the country organize workshops to upskill the AI workforce?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13721,
                "indicator_name": "AI Talent Development ",
                "indicator_score": 15,
                "question": "Does the country organize workshops to upskill the AI workforce?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Supporting AI Start-ups and Technology Unicorns ": {
            "Does the country invest in research and innovation? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13722,
                "indicator_name": "Supporting AI Start-ups and Technology Unicorns ",
                "indicator_score": 10,
                "question": "Does the country invest in research and innovation? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13722,
                "indicator_name": "Supporting AI Start-ups and Technology Unicorns ",
                "indicator_score": 10,
                "question": "Does the country invest in research and innovation? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          },
          "Private Sector Engagement": {
            "Is there any plan to develop PPP in AI development?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13723,
                "indicator_name": "Private Sector Engagement",
                "indicator_score": 5,
                "question": "Is there any plan to develop PPP in AI development?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13723,
                "indicator_name": "Private Sector Engagement",
                "indicator_score": 5,
                "question": "Is there any plan to develop PPP in AI development?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              }
            ]
          },
          "Attracting AI experts from abroad": {
            "Does the country invest in AI research and innovation?": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13724,
                "indicator_name": "Attracting AI experts from abroad",
                "indicator_score": 5,
                "question": "Does the country invest in AI research and innovation?",
                "question_score": 5,
                "status": "Yes",
                "actual_score": 5
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13724,
                "indicator_name": "Attracting AI experts from abroad",
                "indicator_score": 5,
                "question": "Does the country invest in AI research and innovation?",
                "question_score": 5,
                "status": "Data not available",
                "actual_score": 0
              }
            ]
          },
          "Availability of datasets ": {
            "Does the country have any plan to promote the availability of datasets? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13725,
                "indicator_name": "Availability of datasets ",
                "indicator_score": 10,
                "question": "Does the country have any plan to promote the availability of datasets? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 3,
                "ultimate_name": "Development Strategy",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13725,
                "indicator_name": "Availability of datasets ",
                "indicator_score": 10,
                "question": "Does the country have any plan to promote the availability of datasets? ",
                "question_score": 10,
                "status": "Yes",
                "actual_score": 10
              }
            ]
          }
        }
      },
      "Capacity Building": {
        "Healthcare Governance": {
          "Dedicated budget/funding ": {
            "Is there any fund to support healthcare projects ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 50,
                "question": "Is there any fund to support healthcare projects ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 50,
                "question": "Is there any fund to support healthcare projects ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ],
            "Is there any fund for workforce development ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 50,
                "question": "Is there any fund for workforce development ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 50,
                "question": "Is there any fund for workforce development ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          },
          "Public - Private Partnerships ": {
            "Is there any plan to develop PPP? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13686,
                "indicator_name": "Public - Private Partnerships ",
                "indicator_score": 25,
                "question": "Is there any plan to develop PPP? ",
                "question_score": 25,
                "status": "Data not available",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13686,
                "indicator_name": "Public - Private Partnerships ",
                "indicator_score": 25,
                "question": "Is there any plan to develop PPP? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          },
          "Upskilling of workforce for the National Agency ": {
            "Is there any training programme to upskill the healthcare workforce? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13726,
                "indicator_name": "Upskilling of workforce for the National Agency ",
                "indicator_score": 25,
                "question": "Is there any training programme to upskill the healthcare workforce? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 1,
                "taxonomy_name": "Healthcare Governance",
                "indicator_id": 13726,
                "indicator_name": "Upskilling of workforce for the National Agency ",
                "indicator_score": 25,
                "question": "Is there any training programme to upskill the healthcare workforce? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          }
        },
        "IT Governance": {
          "Dedicated budget/funding ": {
            "Is there any fund to support IT projects ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 40,
                "question": "Is there any fund to support IT projects ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 40,
                "question": "Is there any fund to support IT projects ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "Is there any fund for IT workforce development ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 40,
                "question": "Is there any fund for IT workforce development ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13682,
                "indicator_name": "Dedicated budget/funding ",
                "indicator_score": 40,
                "question": "Is there any fund for IT workforce development ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ]
          },
          "Public - Private Partnerships ": {
            "Is there any plan to develop PPP? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13686,
                "indicator_name": "Public - Private Partnerships ",
                "indicator_score": 30,
                "question": "Is there any plan to develop PPP? ",
                "question_score": 30,
                "status": "Yes",
                "actual_score": 30
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13686,
                "indicator_name": "Public - Private Partnerships ",
                "indicator_score": 30,
                "question": "Is there any plan to develop PPP? ",
                "question_score": 30,
                "status": "Yes",
                "actual_score": 30
              }
            ]
          },
          "Upskilling of workforce for the National Agency ": {
            "Is there any training program/certificate course to upskill the IT workforce? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13726,
                "indicator_name": "Upskilling of workforce for the National Agency ",
                "indicator_score": 30,
                "question": "Is there any training program/certificate course to upskill the IT workforce? ",
                "question_score": 30,
                "status": "Yes",
                "actual_score": 30
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 2,
                "taxonomy_name": "IT Governance",
                "indicator_id": 13726,
                "indicator_name": "Upskilling of workforce for the National Agency ",
                "indicator_score": 30,
                "question": "Is there any training program/certificate course to upskill the IT workforce? ",
                "question_score": 30,
                "status": "Yes",
                "actual_score": 30
              }
            ]
          }
        },
        "IT Workforce & Infrastructure": {
          "Introducing ICT Curriculum or Programming ": {
            "Is there any ICT curriculum in schools and universities? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13727,
                "indicator_name": "Introducing ICT Curriculum or Programming ",
                "indicator_score": 25,
                "question": "Is there any ICT curriculum in schools and universities? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13727,
                "indicator_name": "Introducing ICT Curriculum or Programming ",
                "indicator_score": 25,
                "question": "Is there any ICT curriculum in schools and universities? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          },
          "Promoting ICT Research and Development ": {
            "Does the country promote ICT research/innovation ? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13728,
                "indicator_name": "Promoting ICT Research and Development ",
                "indicator_score": 25,
                "question": "Does the country promote ICT research/innovation ? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13728,
                "indicator_name": "Promoting ICT Research and Development ",
                "indicator_score": 25,
                "question": "Does the country promote ICT research/innovation ? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          },
          "Public-Private Partnerships ": {
            "Is there any plan to develop PPP in ICT? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13730,
                "indicator_name": "Public-Private Partnerships ",
                "indicator_score": 25,
                "question": "Is there any plan to develop PPP in ICT? ",
                "question_score": 25,
                "status": "Data not available",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 3,
                "taxonomy_name": "IT Workforce & Infrastructure",
                "indicator_id": 13730,
                "indicator_name": "Public-Private Partnerships ",
                "indicator_score": 25,
                "question": "Is there any plan to develop PPP in ICT? ",
                "question_score": 25,
                "status": "Data not available",
                "actual_score": 0
              }
            ]
          }
        },
        "Healthcare workforce and Infrastructure": {
          "Integration of advanced technologies ": {
            "Does the country integrate advanced technologies in healthcare ? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13731,
                "indicator_name": "Integration of advanced technologies ",
                "indicator_score": 25,
                "question": "Does the country integrate advanced technologies in healthcare ? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13731,
                "indicator_name": "Integration of advanced technologies ",
                "indicator_score": 25,
                "question": "Does the country integrate advanced technologies in healthcare ? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          },
          "Public Funding of Medical Education ": {
            "Does the country have public funding for medical education/free medical education ? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13732,
                "indicator_name": "Public Funding of Medical Education ",
                "indicator_score": 25,
                "question": "Does the country have public funding for medical education/free medical education ? ",
                "question_score": 25,
                "status": "Data not available",
                "actual_score": 0
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13732,
                "indicator_name": "Public Funding of Medical Education ",
                "indicator_score": 25,
                "question": "Does the country have public funding for medical education/free medical education ? ",
                "question_score": 25,
                "status": "Data not available",
                "actual_score": 0
              }
            ]
          },
          "Funding development for Healthcare research ": {
            "Does the country promote/develop funding for healthcare research? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13733,
                "indicator_name": "Funding development for Healthcare research ",
                "indicator_score": 25,
                "question": "Does the country promote/develop funding for healthcare research? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13733,
                "indicator_name": "Funding development for Healthcare research ",
                "indicator_score": 25,
                "question": "Does the country promote/develop funding for healthcare research? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          },
          "Increasing Number of Graduate Schools Teaching Medical Science or Public Health- adequacy of graduates with respect to market/country need ": {
            "Does the country produce more healthcare graduates? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13734,
                "indicator_name": "Increasing Number of Graduate Schools Teaching Medical Science or Public Health- adequacy of graduates with respect to market/country need ",
                "indicator_score": 25,
                "question": "Does the country produce more healthcare graduates? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 4,
                "taxonomy_name": "Healthcare workforce and Infrastructure",
                "indicator_id": 13734,
                "indicator_name": "Increasing Number of Graduate Schools Teaching Medical Science or Public Health- adequacy of graduates with respect to market/country need ",
                "indicator_score": 25,
                "question": "Does the country produce more healthcare graduates? ",
                "question_score": 25,
                "status": "Yes",
                "actual_score": 25
              }
            ]
          }
        },
        "AI Workforce/Infrastructure": {
          "Funding in AI field ": {
            "Does the country invest in research and innovation in AI field? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13735,
                "indicator_name": "Funding in AI field ",
                "indicator_score": 40,
                "question": "Does the country invest in research and innovation in AI field? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13735,
                "indicator_name": "Funding in AI field ",
                "indicator_score": 40,
                "question": "Does the country invest in research and innovation in AI field? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ],
            "Does the country invest developing the AI workforce ? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13735,
                "indicator_name": "Funding in AI field ",
                "indicator_score": 40,
                "question": "Does the country invest developing the AI workforce ? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13735,
                "indicator_name": "Funding in AI field ",
                "indicator_score": 40,
                "question": "Does the country invest developing the AI workforce ? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ]
          },
          "Promoting AI Research/Training programme ": {
            "Does the country promote AI research/training programme ? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13736,
                "indicator_name": "Promoting AI Research/Training programme ",
                "indicator_score": 20,
                "question": "Does the country promote AI research/training programme ? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13736,
                "indicator_name": "Promoting AI Research/Training programme ",
                "indicator_score": 20,
                "question": "Does the country promote AI research/training programme ? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ]
          },
          "AI Curriculum in Schools & Universities ": {
            "Is there any AI curriculum in schools and universities? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13737,
                "indicator_name": "AI Curriculum in Schools & Universities ",
                "indicator_score": 20,
                "question": "Is there any AI curriculum in schools and universities? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13737,
                "indicator_name": "AI Curriculum in Schools & Universities ",
                "indicator_score": 20,
                "question": "Is there any AI curriculum in schools and universities? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ]
          },
          "Public-Private Partnerships for AI based projects ": {
            "Is there any PPP for country's AI projects? ": [
              {
                "c_name": "UK",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 74,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13738,
                "indicator_name": "Public-Private Partnerships for AI based projects ",
                "indicator_score": 20,
                "question": "Is there any PPP for country's AI projects? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              },
              {
                "c_name": "USA",
                "developement_id": 2,
                "development_name": "Prospective Development",
                "ultimate_field_id": 4,
                "ultimate_name": "Capacity Building",
                "country_id": 228,
                "taxonomy_id": 5,
                "taxonomy_name": "AI Workforce/Infrastructure",
                "indicator_id": 13738,
                "indicator_name": "Public-Private Partnerships for AI based projects ",
                "indicator_score": 20,
                "question": "Is there any PPP for country's AI projects? ",
                "question_score": 20,
                "status": "Yes",
                "actual_score": 20
              }
            ]
          }
        }
      }
    }
}
  indicator_score1: number = 0;
  indicator_score2: number = 0;
  scores: any[]=[];


  ngOnInit(): void {
    console.log(this.response);
  
    this.devlop = Object.entries(this.response);
    console.log(this.devlop);
  
  
    this.devlopPresent = this.devlop[0];
    console.log(this.devlopPresent);
    let datt = this.formate_data(this.devlopPresent)
     console.log(datt);
  
    // this.devPresentValue = this.devlopPresent[1];
    // Object.entries(this.devlopPresent[1]).forEach((element,key)=>{
    //       console.log(element);
    //       console.log(key);

    //       if(key == 0){
    //         this.developmentFuntion(element[1]);

    //         this.ultimates.push({
    //           name: element[0],
    //           taxonomy: this.texonom1
    //         })

    //       }else{
    //         this.developmentFuntion(element[1])

    //         this.ultimates.push({
    //           name: element[0],
    //           taxonomy: this.texonom1
    //         })
    //       }

    // })

   
    this.devData = {development_type:this.devlopPresent[0],ultimates:this.ultimates}
    console.log(this.devData);
    }

    formate_data(data:any){
      let devData:any;
      let ultimates: any[]=[];
      let texonom1: any[]=[];
      let texonom2: any[]=[];
      let indicator2: any[]=[];
      let indicator1: any[]=[];
      let question1: any;
      let question2: any;
      let country1: any[]=[];
      let country2: any[]=[];
      let indicator_score:any=[];
      Object.entries(data[1]).forEach((element,key)=>{     

          if(key == 0){
              var elemData:any = element[1];

              // Object.entries(elemData).forEach((elem) => {
              //     indicator1 = [];
              //     var elemeData:any = elem[1];
              //     Object.entries(elemeData).forEach((eleme)=>{
              //         question1 = [];
              //         var ele:any = eleme[1];
              //         indicator_score = [];
              //         let actual_score1 = 0;
              //         let actual_score2 = 0;
              //         let indicator_score1 = 0;
              //         let indicator_score2 = 0;
              //         let country_percantag1 = 0;
              //         let country_percantag2 = 0;
              //         let question_status1:any;
              //         let question_status2:any;
              //         Object.entries(ele).forEach((el)=>{
              //             country1 = [];
              //             var e:any = el[1];
              //             e.forEach((elmnt:any,index:any) => {
              //                 country1.push(elmnt.c_name);
              //                 if(index == 0){
              //                     question_status1 = elmnt.status;
              //                     actual_score1 += elmnt.actual_score;
              //                     indicator_score1 = elmnt.indicator_score;
              //                 }else{
              //                     actual_score2 += elmnt.actual_score;
              //                     question_status2 = elmnt.status;
              //                     indicator_score2 = elmnt.indicator_score;
              //                 }
              //             });
              //             question1.push({
              //                 name:el[0],
              //                 question_status1:question_status1,
              //                 question_status2:question_status2
              //             })
              //         })
              //         country_percantag1 = Math.round(Math.round((actual_score1/indicator_score1)* 100)/20);
              //         country_percantag2 = Math.round(Math.round((actual_score2/indicator_score2)* 100)/20);
              //         let score = {
              //             country_1:country1[0],
              //             country_2:country1[1],
              //             indicator_score1:indicator_score1,
              //             actual_score1:actual_score1,
              //             indicator_score2:indicator_score2,
              //             actual_score2:actual_score2,
              //             country_percantag1:country_percantag1,
              //             country_percantag2:country_percantag2
              //         }
              //         indicator_score.push(score);
              //         indicator1.push({
              //             name:eleme[0],
              //             questions:question1,
              //             countries: country1,
              //             score:indicator_score
              //         })
              //     })
              //     texonom1.push({
              //     name: elem[0],
              //     indicator:indicator1
              //     })
              // });   

              ultimates.push({
                  name: element[0],
                  taxonomy: texonom1
              })
              ultimates.sort(function(a:any,b:any) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
          }else{
              var elemData:any = element[1];
              
              // Object.entries(elemData).forEach((elem,key) => {
              //     indicator2 = [];
              //     var elemeData:any = elem[1];
              //     Object.entries(elemeData).forEach((eleme,key)=>{
              //         question2 = [];
              //         indicator_score = [];
              //         let actual_score1 = 0;
              //         let actual_score2 = 0;
              //         let indicator_score1 = 0;
              //         let indicator_score2 = 0;
              //         let country_percantag1 = 0;
              //         let country_percantag2 = 0;
              //         let question_status1:any;
              //         let question_status2:any;
              //         var ele:any = eleme[1];
              //         Object.entries(ele).forEach((el,key)=>{
              //             country2 = [];
              //             var e:any = el[1];
              //             e.forEach((elmnt:any,index:any) => {
              //                 country2.push(elmnt.c_name);
              //                 if(index == 0){
              //                     question_status1 = elmnt.status;
              //                     actual_score1 += elmnt.actual_score;
              //                     indicator_score1 = elmnt.indicator_score;
              //                 }else{
              //                     actual_score2 += elmnt.actual_score;
              //                     question_status2 = elmnt.status;
              //                     indicator_score2 = elmnt.indicator_score;
              //                 }
              //             });
              //             question2.push({
              //                 name:el[0],
              //                 question_status1:question_status1,
              //                 question_status2:question_status2
              //             })
              //         })
              //         country_percantag1 = Math.round(Math.round((actual_score1/indicator_score1)* 100)/20);
              //         country_percantag2 = Math.round(Math.round((actual_score2/indicator_score2)* 100)/20);
              //         let score = {
              //             country_1:country2[0],
              //             country_2:country2[1],
              //             indicator_score1:indicator_score1,
              //             actual_score1:actual_score1,
              //             indicator_score2:indicator_score2,
              //             actual_score2:actual_score2,
              //             country_percantag1:country_percantag1,
              //             country_percantag2:country_percantag2
              //         }
              //         indicator_score.push(score);
              //         indicator2.push({
              //             name:eleme[0],
              //             questions:question2,
              //             countries: country2,
              //             score:indicator_score
              //         })
              //     })
              //     texonom2.push({
              //     name: elem[0],
              //     indicator:indicator2
              //     })
              // });
  
              ultimates.push({
                  name: element[0],
                  taxonomy: texonom2
              })
              ultimates.sort(function(a:any,b:any) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
          }            
      })

      devData = {development_type:data[0],ultimates:ultimates}
      return devData;
  }


    developmentFuntion(elementData:any){
      var elemData:any = elementData;
      this.texonom1 = [];
      Object.entries(elemData).forEach((elem) => {
        console.log(elem);

        this.indicator1= [];
        var elemeData:any = elem[1];
        Object.entries(elemeData).forEach((eleme)=>{
            console.log(eleme);


            this.question1 = [];
            var ele:any = eleme[1];
            Object.entries(ele).forEach((el)=>{
                  console.log(el);
    
                  this.country1 = [];
                  var e:any = el[1];
                  e.forEach((elmnt:any) => {
                    console.log(elmnt);
                    this.country1.push(elmnt.c_name);
                  });

                  // this.question1.push(el[0]);
                  this.question1.push({
                    name:el[0],
                    question_status1:'',
                    question_status2:''
                  })
            })

            // this.indicator2.push(eleme[0])
            this.indicator1.push({
              name:eleme[0],
              questions:this.question1,
              contries: this.country1
            })
        })

        // this.texonomy1.push(elem[0]);
        this.texonom1.push({
          name: elem[0],
          indicator:this.indicator1
        })

      });

     
    }
  

  // ngOnInit(): void {
  //   console.log(this.response);
  
  //   this.devlop = Object.entries(this.response);
  //   console.log(this.devlop);
  
  
  //   this.devlopPresent = this.devlop[0];
  //   console.log(this.devlopPresent);
  
  //   // this.devPresentValue = this.devlopPresent[1];
  //   Object.entries(this.devlopPresent[1]).forEach((element,key)=>{
  //         console.log(element);
  //         console.log(key);

  //         if(key == 0){
  //           var elemData:any = element[1];
  //             this.texonom1 = [];
  //           Object.entries(elemData).forEach((elem) => {
  //             console.log(elem);
  
  //             this.indicator1 = [];
  //             var elemeData:any = elem[1];
  //             Object.entries(elemeData).forEach((eleme)=>{
  //                 console.log(eleme);
  
  //                 this.question1 = [];
  //                 var ele:any = eleme[1];
  //                 Object.entries(ele).forEach((el)=>{
  //                       console.log(el);
  
  //                       this.country1 = [];
  //                       var e:any = el[1];
  //                       e.forEach((elmnt:any) => {
  //                         console.log(elmnt);
  
  //                         this.country1.push(elmnt.c_name);
                     
  //                         // if(key == 0){
  //                         //   // this.indicator_score1 = 0;
  //                         //   this.queStatus1 = elmnt.status;
  //                         //   this.indicator_score1 = elmnt.indicator_score
                            
  //                         // }else{
  //                         //   // this.indicator_score2 = 0;
  //                         //   this.queStatus2 = elmnt.status;
  //                         //   this.indicator_score2 = elmnt.indicator_score
  //                         // }
  //                       });
  
  //                       // this.scores.push({
  //                       //   // actual_score1: '',
  //                       //   // actual_score2: '',
  //                       //   // country_1: '',
  //                       //   // country_2: '',
  //                       //   // country_percantag1: '',
  //                       //   // country_percantag2: '',
  //                       //   indicator_score1: this.indicator_score1,
  //                       //   indicator_score2: this.indicator_score2
  //                       // })  
  
  //                       // this.question1.push(el[0]);
  //                       this.question1.push({
  //                         name:el[0],
  //                         question_status1:this.queStatus1,
  //                         question_status2:this.queStatus2
  //                       })
  //                 })
                 
  
  //                   // this.indicator1.push(eleme[0])
  //                   this.indicator1.push({
  //                     name:eleme[0],
  //                     questions:this.question1,
  //                     contries: this.country1,
  //                     score:this.scores
  //                   })
  //             })
  
  //             // this.texonomy.push(elem[0]);
  //             this.texonom1.push({
  //               name: elem[0],
  //               indicator:this.indicator1
  //             })
  //           });
    
  //           this.ultimates.push({
  //             name: element[0],
  //             taxonomy: this.texonom1
  //           })
  
  //         }else{
  //           var elemData:any = element[1];
  //           this.texonom1 = [];
  //           Object.entries(elemData).forEach((elem) => {
  //             console.log(elem);

  //             this.indicator1= [];
  //             var elemeData:any = elem[1];
  //             Object.entries(elemeData).forEach((eleme)=>{
  //                 console.log(eleme);
    
  
  //                 this.question1 = [];
  //                 var ele:any = eleme[1];
  //                 Object.entries(ele).forEach((el)=>{
  //                       console.log(el);
          
  //                       this.country1 = [];
  //                       var e:any = el[1];
  //                       e.forEach((elmnt:any) => {
  //                         console.log(elmnt);
  //                         this.country1.push(elmnt.c_name);
  //                       });
  
  //                       // this.question1.push(el[0]);
  //                       this.question1.push({
  //                         name:el[0],
  //                         question_status1:'',
  //                         question_status2:''
  //                       })
  //                 })
  
  //                 // this.indicator2.push(eleme[0])
  //                 this.indicator1.push({
  //                   name:eleme[0],
  //                   questions:this.question1,
  //                   contries: this.country1
  //                 })
  //             })
  
  //             // this.texonomy1.push(elem[0]);
  //             this.texonom1.push({
  //               name: elem[0],
  //               indicator:this.indicator1
  //             })
  
  //           });
    
  //           this.ultimates.push({
  //             name: element[0],
  //             taxonomy: this.texonom1
  //           })
  //         }

  //   })
  //   this.devData = {development_type:this.devlopPresent[0],ultimates:this.ultimates}
  //   console.log(this.devData);
  //   }
  



// ngOnInit(): void {
//   console.log(this.response);

//   this.devlop = Object.entries(this.response);
//   console.log(this.devlop);


//   this.devlopPresent = this.devlop[0];
//   console.log(this.devlopPresent);

//   // this.devPresentValue = this.devlopPresent[1];
//   Object.entries(this.devlopPresent[1]).forEach((element,key)=>{
//         console.log(element);
//         console.log(key);

//         if(key == 0){
//           var elemData:any = element[1];
//           Object.entries(elemData).forEach((elem) => {
//             console.log(elem);

//             this.indicator1 = [];
//             var elemeData:any = elem[1];
//             Object.entries(elemeData).forEach((eleme)=>{
//                 console.log(eleme);

//                 this.question1 = [];
//                 var ele:any = eleme[1];
//                 Object.entries(ele).forEach((el)=>{
//                       console.log(el);

//                       this.country1 = [];
//                       var e:any = el[1];
//                       e.forEach((elmnt:any,key:any) => {
//                         console.log(elmnt);
//                         console.log(key);

//                         this.country1.push(elmnt.c_name);
                   
//                         if(key == 0){
//                           // this.indicator_score1 = 0;
//                           this.queStatus1 = elmnt.status;
//                           this.indicator_score1 = elmnt.indicator_score
                          
//                         }else{
//                           // this.indicator_score2 = 0;
//                           this.queStatus2 = elmnt.status;
//                           this.indicator_score2 = elmnt.indicator_score
//                         }
//                       });

//                       this.scores.push({
//                         // actual_score1: '',
//                         // actual_score2: '',
//                         // country_1: '',
//                         // country_2: '',
//                         // country_percantag1: '',
//                         // country_percantag2: '',
//                         indicator_score1: this.indicator_score1,
//                         indicator_score2: this.indicator_score2
//                       })  

//                       // this.question1.push(el[0]);
//                       this.question1.push({
//                         name:el[0],
//                         question_status1:this.queStatus1,
//                         question_status2:this.queStatus2
//                       })
//                 })
               

//                   // this.indicator1.push(eleme[0])
//                   this.indicator1.push({
//                     name:eleme[0],
//                     questions:this.question1,
//                     contries: this.country1,
//                     score:this.scores
//                   })
//             })

//             // this.texonomy.push(elem[0]);
//             this.texonom1.push({
//               name: elem[0],
//               indicator:this.indicator1
//             })
//           });
  
//           this.ultimates.push({
//             name: element[0],
//             taxonomy: this.texonom1
//           })

//         }else{
//           var elemData:any = element[1];
//           Object.entries(elemData).forEach((elem) => {
//             console.log(elem);
//             this.indicator2 = [];
//             var elemeData:any = elem[1];
//             Object.entries(elemeData).forEach((eleme)=>{
//                 console.log(eleme);
  

//                 this.question2 = [];
//                 var ele:any = eleme[1];
//                 Object.entries(ele).forEach((el)=>{
//                       console.log(el);
        
//                       this.country2 = [];
//                       var e:any = el[1];
//                       e.forEach((elmnt:any) => {
//                         console.log(elmnt);
//                         this.country2.push(elmnt.c_name);
//                       });

//                       // this.question2.push(el[0]);
//                       this.question2.push({
//                         name:el[0],
//                         question_status1:'',
//                         question_status2:''
//                       })
//                 })

//                 // this.indicator2.push(eleme[0])
//                 this.indicator2.push({
//                   name:eleme[0],
//                   questions:this.question2,
//                   contries: this.country2
//                 })
//             })

//             // this.texonomy1.push(elem[0]);
//             this.texonom2.push({
//               name: elem[0],
//               indicator:this.indicator2
//             })

//           });
  
//           this.ultimates.push({
//             name: element[0],
//             taxonomy: this.texonom2
//           })
//         }
       
//   })
//   this.devData = {development_type:this.devlopPresent[0],ultimates:this.ultimates}
//   console.log(this.devData);
//   }
}

  // this.devlopPresent.forEach((element:any,i:number) => {
  //   // console.log(element);
  //   // console.log(i);
  //   if(i == 0){
  //     this.devType = element;
  //   }else{
  //     // console.log(element);
  //     Object.entries(element).forEach((e1:any)=>{
  //         // console.log(e1);
  //         e1.forEach((e2:any,i2:number) => {
  //           // console.log(e2);
  //           // console.log(i2);
  //           if(i2 == 0){
  //             this.ultimates = e2;

  //           }else{
  //             Object.entries(e2).forEach((e3) =>{
  //               console.log(e3);
  //               e3.forEach((e4:any,i4) =>{
  //                 // console.log(e4);
  //                 // console.log(i4);
  //                 if(i4 == 0){
  //                   this.texonomy = e4;
  //                 }else{
  //                   console.log(e4);
                    
  //                 }
  //               })
  //             })
  //           }
            
  //         });
  //     })
  //   }
    
    
    
  // });

//  Object.entries(this.devlopPresent[1]).forEach((element,i) =>{
//        console.log(element);

//       this.ultimates.push(element[0]);

//       var x:any = element[1];

//       Object.entries(x).forEach((elem) => {
//         console.log(elem);
//         this.texonomy = (elem[0])
//       })
//     //  for(var key in x){
//     //   if (Object.hasOwnProperty.call(x, key)) {
//     //     this.texonomy.push(key);
//     //     console.log(x);
//     //   }
//     //  }
//   })

//   console.log(this.ultimates);
//   console.log(this.texonomy);
  
    // this.devlop.forEach((element:any) => {
    //   console.log(element); 
    //   this.devType.push(element[0]);
    // });
    // console.log(this.devType);
    

    // for(var key in element[1]){
    //   if (Object.hasOwnProperty.call(element[1], key)) {
    //     this.ultimates.push(key);
    //     console.log(element[1]);
    //   }
    // }

    // console.log(this.ultimates);
    
 
  // console.log(this.devPresentValue);  
  
  // Object.entries(this.devPresentValue).forEach((element)=>{
  //     console.log(element);
      
  // })

 // let self = this;

    // for (const [key, value] of Object.entries(this.development)) {
    //   // console.log(key, value);
    //   // this.devlop.push(key);
    //   // this.devlopPresent.push(value);
    //   // this.response.push(key,value);
    // }

    // console.log(this.devlop);
    // console.log(this.devlopPresent);
    // console.log(this.response);

    // Object.keys(this.development).forEach(function(key:any,value:any) {
    //   self.response.push(key);
    //   self.response[key] = (value);
    // });
    // console.log(this.response);

    // Object.values(this.development).forEach(function(key,value) {
    //   self.response.push(key);
    // });
    // console.log(this.response);

    // Object.entries(this.development).forEach(function(key:any,value:any) {
      // self.response.push(key[0]);
      // [key[1]][0] = [[key[1]][0]] 
      // self.response[key[0]] = key[1];
    // });
    // console.log(this.response);

    // const objectArray = Object.fromEntries(this.response);

    // console.log(objectArray);
    

      // objectArray.forEach(([key, value]) => {
      //   console.log(key); // 'one'
      //   console.log(value); // 1
      // });

  
        // objectArray.forEach(([key, value]) => {
        //   console.log(key); // 'one'
        //   console.log(value); // 1
        // });
        // console.log(objectArray);
        // console.log(this.response);

    // self.response.forEach(element => {
    //   self.devlop.push(element)
      
    // });
    // console.log(self.devlop);

    // self.response.forEach((key,value) => {
    //   self.devlop.push(key)
    // });
    // console.log(self.devlop);

    // this.response.forEach((value: any, index: number) => {
    //   console.log(value); 
    //   this.devlop.push(value);  
    // })
    // console.log(this.devlop);
    