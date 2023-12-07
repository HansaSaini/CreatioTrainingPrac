define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "remove",
				"name": "CardContentContainer"
			},
			{
				"operation": "remove",
				"name": "Tabs"
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab"
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "410c4339-16b9-4436-9d47-72577c675860",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_nla7q7j_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"layoutConfig": {},
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_a8mtuva",
					"labelPosition": "auto",
					"control": "$NumberAttribute_a8mtuva"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_2qpidzv",
					"labelPosition": "auto",
					"control": "$NumberAttribute_2qpidzv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_vf3wr4o",
					"labelPosition": "auto",
					"control": "$NumberAttribute_vf3wr4o",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabs",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"layoutConfig": {},
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTab",
				"values": {
					"caption": "#ResourceString(GeneralInfoTab_caption)#",
					"type": "crt.TabContainer",
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large"
					},
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_kudgbtv",
					"labelPosition": "auto",
					"control": "$LookupAttribute_kudgbtv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_cl80i7s",
					"labelPosition": "auto",
					"control": "$LookupAttribute_cl80i7s",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_nremkob",
					"labelPosition": "auto",
					"control": "$StringAttribute_nremkob",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrCommissionPercent",
					"control": "$UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ffzbxna",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ffzbxna",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_dcpzbjt",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dcpzbjt_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_s60pnke",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_s60pnke_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_g9bz6qo",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_s60pnke",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wsegj5l",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_g9bz6qo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_i7yx2m3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_i7yx2m3_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_wsegj5l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dj3267r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dj3267r_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_885ul5vDS"
						}
					}
				},
				"parentName": "FlexContainer_wsegj5l",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ueyurhm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ueyurhm_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_wsegj5l",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_oxcizda",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_oxcizda_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_885ul5v"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ueyurhm",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_tm3iri0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_tm3iri0_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ueyurhm",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ceuhx8d",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ceuhx8d_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_885ul5v"
					]
				},
				"parentName": "FlexContainer_wsegj5l",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_b4x1gfu",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_s60pnke",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_885ul5v",
					"activeRow": "$GridDetail_885ul5v_ActiveRow",
					"selectionState": "$GridDetail_885ul5v_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_885ul5v_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_885ul5vDS_Id",
					"columns": [
						{
							"id": "385af660-3e83-4ec5-9545-dfe0bad8f781",
							"code": "GridDetail_885ul5vDS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_885ul5vDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "3f41eb54-5522-413a-842e-9c87ea21aa5c",
							"code": "GridDetail_885ul5vDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_885ul5vDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "82045090-fd60-fbbe-d73d-a2bfda85140b",
							"code": "GridDetail_885ul5vDS_UsrOwner",
							"path": "UsrOwner",
							"caption": "#ResourceString(GridDetail_885ul5vDS_UsrOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "b3c7dc52-6c98-e1d9-a278-a177d5432f40",
							"code": "GridDetail_885ul5vDS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_885ul5vDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "668f1d49-ddc6-7d89-43fa-db393f4b4f75",
							"code": "GridDetail_885ul5vDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_885ul5vDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_b4x1gfu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_885ul5v_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_885ul5v",
							"filters": "$GridDetail_885ul5v | crt.ToCollectionFilters : 'GridDetail_885ul5v' : $GridDetail_885ul5v_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_885ul5v_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_885ul5v_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_885ul5vDS",
							"filters": "$GridDetail_885ul5v | crt.ToCollectionFilters : 'GridDetail_885ul5v' : $GridDetail_885ul5v_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_885ul5v_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"NumberAttribute_a8mtuva": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "Price can not be less than 0 (Zero)"
								}
							}
						}
					},
					"NumberAttribute_2qpidzv": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "Area can not be less than 0 (Zero)"
								}
							}
						}
					},
					"LookupAttribute_kudgbtv": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"LookupAttribute_cl80i7s": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"StringAttribute_nremkob": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"LookupAttribute_ffzbxna": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"GridDetail_885ul5v": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_885ul5vDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_885ul5vDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_885ul5vDS.UsrVisitDateTime"
									}
								},
								"GridDetail_885ul5vDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_885ul5vDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_885ul5vDS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_885ul5vDS.UsrOwner"
									}
								},
								"GridDetail_885ul5vDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_885ul5vDS.UsrComment"
									}
								},
								"GridDetail_885ul5vDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_885ul5vDS.CreatedOn"
									}
								},
								"GridDetail_885ul5vDS_Id": {
									"modelConfig": {
										"path": "GridDetail_885ul5vDS.Id"
									}
								}
							}
						}
					},
					"NumberAttribute_vf3wr4o": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_885ul5vDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_885ul5vDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
/* The custom implementation of the system query handler. */
handler: async (request, next) => {
/* If the UsrPriceUSD field changes, take the following steps. */
if (request.attributeName === 'NumberAttribute_a8mtuva' || // if price changed
  request.attributeName === 'UsrOfferTypeUsrCommissionPercent' ) { // or multiplier changed
var price = await request.$context.NumberAttribute_a8mtuva;
var percent = await request.$context.UsrOfferTypeUsrCommissionPercent;
var commission = price * percent / 100;
request.$context.NumberAttribute_vf3wr4o = commission;
if(price >= 50000){
		request.$context.enableAttributeValidator('StringAttribute_nremkob', 'required');
		console.log('Val>-50000',price)
	}else {
                    request.$context.disableAttributeValidator('StringAttribute_nremkob', 'required');
    	   }
	}
/* Call the next handler if it exists and return its result. */
return next?.handle(request);
}
			},
			{
request: "usr.MyButtonRequest",
/* Implementation of the custom query handler. */
handler: async (request, next) => {
this.console.log("Button works...");
Terrasoft.showInformation("My button was pressed.");
var price = await request.$context.NumberAttribute_a8mtuva;
this.console.log("Price = " + price);
/* Call the next handler if it exists and return its result. */
return next?.handle(request);
}
}]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
Format the validator type in PascalCase. */
						"usr.DGValidator": {
						validator: function (config) {
						return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
						result = null;
						} else {
						result = {
						"usr.DGValidator": {
						message: config.message
						}
						};
						}
						return result;
						};
						},
						params: [
						{
						name: "minValue"
						},
						{
						name: "message"
						}
						],
						async: false
						}
		}/**SCHEMA_VALIDATORS*/
	};
});