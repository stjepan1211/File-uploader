using System.Linq;
using System.Linq.Dynamic;
using System.Linq.Expressions;
using AutoMapper.QueryableExtensions;

namespace FileUploader.Common.PagedList
{
    public static class PagedListHelper
    {
        public static IQueryable GetPage(this IQueryable query, int pageNumber, int pageSize)
        {
            pageNumber = pageNumber > 0 ? pageNumber : 1;
            pageSize = pageSize > 0 ? pageSize : 1;

            return query.Skip((pageNumber - 1) * pageSize).Take(pageSize);
        }

        public static IQueryable<TEntity> GetPage<TEntity>(this IQueryable<TEntity> query, int pageNumber, int pageSize)
        {
            pageNumber = pageNumber > 0 ? pageNumber : 1;
            pageSize = pageSize > 0 ? pageSize : 1;

            return query.Skip((pageNumber - 1) * pageSize).Take(pageSize);
        }

        public static PagedList<T> ToPagedList<T>(this IQueryable query, int pageNumber, int pageSize, string order)
        {
            var totalCount = query.Count();

            if (!string.IsNullOrWhiteSpace(order))
            {
                query = query.OrderBy(order);
            }
            else
            {
                query = query.OrderBy("id desc");
            }

            query = query.GetPage(pageNumber, pageSize);

            var data = query.ProjectTo<T>().ToList();

            return new PagedList<T>(pageNumber, pageSize, totalCount, data);
        }
    }
}
