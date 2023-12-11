﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyServiceSchema

	/// <exclude/>
	public class UsrRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyServiceSchema(UsrRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("12e99544-1e3a-4731-b818-c5d21801f6a5");
			Name = "UsrRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ac937dc3-8c19-4508-8638-7b9b638d4ed4");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,84,75,111,212,48,16,190,247,87,152,156,18,105,137,196,149,82,164,93,186,173,22,180,221,170,217,170,7,196,193,77,102,219,8,63,82,123,92,26,181,253,239,157,196,102,137,233,178,5,36,16,66,245,37,241,204,55,223,188,173,184,4,219,240,18,216,18,140,225,86,175,48,127,167,213,170,190,112,134,99,173,213,206,237,14,163,227,108,173,46,88,209,90,4,153,23,96,174,235,18,230,186,2,177,187,93,157,159,193,249,83,144,113,137,245,117,239,108,136,28,198,99,32,223,159,108,86,18,63,1,164,140,141,189,155,13,142,59,120,1,214,146,179,2,57,130,135,124,12,241,80,230,104,120,137,159,188,116,108,155,35,64,98,111,40,186,243,90,212,216,158,192,149,171,13,72,80,104,211,225,165,75,133,237,177,39,76,58,84,30,4,85,230,221,52,238,92,212,37,43,5,183,150,157,0,23,216,134,112,216,107,54,225,22,194,109,196,102,164,173,22,74,180,195,12,122,14,223,164,62,232,69,3,190,115,113,50,189,142,178,159,169,107,253,25,210,57,224,165,174,40,224,228,120,81,44,147,17,155,232,170,45,176,21,93,18,4,155,147,7,126,1,107,105,126,102,120,211,64,53,90,147,117,167,203,4,44,30,104,35,57,70,134,94,148,191,183,90,141,8,102,27,173,44,108,199,81,57,214,228,161,38,21,148,181,228,130,29,2,46,53,114,49,150,218,41,156,180,203,182,129,89,149,90,52,93,107,77,95,51,47,27,177,72,184,88,173,192,4,77,20,121,64,81,79,168,67,71,180,4,217,90,125,27,1,235,21,11,126,242,153,61,114,66,44,204,84,54,216,166,67,175,25,187,187,99,91,80,131,48,178,136,189,59,63,50,29,196,22,27,221,62,162,48,128,206,40,246,242,213,110,164,186,143,110,5,8,40,145,89,255,217,99,10,190,4,89,122,106,193,208,184,40,250,167,193,121,28,34,109,152,112,82,165,7,78,149,121,225,100,154,156,90,115,108,104,40,79,139,253,36,219,96,112,96,180,76,55,85,119,141,56,187,4,3,61,145,47,76,146,81,254,211,43,199,69,234,189,229,199,220,144,41,130,73,187,80,15,93,93,197,69,223,228,119,172,170,158,115,80,241,95,32,30,246,105,3,59,183,161,96,113,153,191,78,169,1,235,68,87,89,95,226,124,122,3,165,67,40,74,46,184,121,19,80,111,211,44,182,14,189,243,198,223,84,247,191,191,209,135,211,127,118,161,195,218,209,62,79,111,184,108,4,164,63,57,218,201,226,195,139,228,251,233,94,211,255,175,143,222,156,223,60,63,121,91,231,226,239,60,121,212,135,231,39,111,40,254,131,79,222,253,14,45,246,3,188,115,78,219,151,10,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("12e99544-1e3a-4731-b818-c5d21801f6a5"));
		}

		#endregion

	}

	#endregion

}

