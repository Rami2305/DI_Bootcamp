


class Pagination():

    def __init__(self, items = None , pageSize = 10):

        self.items = items if items is not None else []
        self.pageSize = max(1, int(pageSize))
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)
        self.currentPage = 1
    
    def getVisibleItems(self):
        # Returns the items visible in the current pageSize
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]
    
    def prevPage(self):
        # Mote to previouse page if possible

        self.currentPage = max(1, self.currentPage - 1)
        return self
    
    def nextPage(self):
        # Mmove to next page if possible

        self.currentPage = min(self.totalPages, self.currentPage + 1)

    def firstPage(self): 
        # mOve to first page

        self.currentPage = 1
        return self
    
    def lastPage(self):
        # return the last page
        self.currentPage = self.totalPages
        return self
    
    def goToPage(self, pageNum):
        # go to specific page

        page = int(pageNum)
        self.currentPage = max(1, min(self.totalPages, page))
        return self
    

alphabetList  = list("abcdefghijklmnopqrstuvwxyz")

# start de pagination with 4 elements per page
p = Pagination(alphabetList , 4)

print(p.getVisibleItems())  
print(p.totalPages)         # 7 (26 letters ÷ 4 elements per page = 7 pages)
print(p.currentPage)        # 1

p.nextPage()
print(p.getVisibleItems())  # ['e', 'f', 'g', 'h']
print(p.currentPage)        # 2

p.lastPage()
print(p.getVisibleItems())  # ['y', 'z']
print(p.currentPage)        # 7