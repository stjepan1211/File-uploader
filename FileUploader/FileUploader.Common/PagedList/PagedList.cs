using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileUploader.Common.PagedList
{
    public class PagedList<TItems>
    {
        public PagedList()
        {
        }

        public PagedList(int page, int pageSize, int totalItemCount, IEnumerable<TItems> items)
        {
            this.Page = page;
            this.PageSize = pageSize;
            this.TotalItemCount = totalItemCount;
            this.Items = items;
        }

        public IEnumerable<TItems> Items { get; set; }
        public int TotalItemCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }

        /// <summary>
        /// Returns the String representation of the object properties.
        /// </summary>
        public override string ToString()
        {
            return "";
        }
    }

    public class PagedList<TItems, TData>
    {
        public PagedList()
        {
        }

        public PagedList(int page, int pageSize, int totalItemCount, IEnumerable<TItems> items, TData data)
        {
            this.Page = page;
            this.PageSize = pageSize;
            this.TotalItemCount = totalItemCount;
            this.Items = items;
            this.Data = data;
        }

        public IEnumerable<TItems> Items { get; set; }
        public int TotalItemCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public TData Data { get; set; }

        /// <summary>
        /// Returns the String representation of the object properties.
        /// </summary>
        public override string ToString()
        {
            return "";
        }
    }
}
