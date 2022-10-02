namespace API.Helpers
{
    public class PaginationParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int _pageSize = 10;
        public int PageSize
        {
            get => _pageSize;
            // user can't set the pageSize greater than MaxPageSize
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value; 
        }
    }
}