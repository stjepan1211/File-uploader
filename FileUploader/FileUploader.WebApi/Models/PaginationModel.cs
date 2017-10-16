using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FileUploader.WebApi.Models
{
    /// <summary>
    /// PaginationModel
    /// </summary>
    public class PaginationModel
    {
        /// <summary>
        /// Page number to retrieve data for
        /// </summary>
        public int PageNumber { get; set; }
        /// <summary>
        /// Page size/Max elements per page
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// Order field
        /// </summary>
        public string SortField { get; set; }
        /// <summary>
        /// Order direction
        /// </summary>
        public string SortDirection { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string OrderBy => SortField == null ? null : $"{SortField} {(SortDirection == null ? "asc" : SortDirection)}";

        /// <summary>
        /// Returns the String representation of the object properties.
        /// </summary>
        public override string ToString()
        {
            return "";
        }
    }
}