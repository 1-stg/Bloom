const modalSearchTemplate = `
  <div class="modal fade search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="searchModalLabel">Поиск</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group input-group-lg">
            <input type="text" class="form-control" placeholder="Введите название букета или цветка..." />
            <button class="btn btn-primary" type="button">Найти</button>
          </div>
          <div class="mt-3">
            <h6>Популярные запросы:</h6>
            <div class="d-flex flex-wrap gap-2 mt-2">
              <a href="#" class="badge bg-light text-dark p-2 text-decoration-none">Розы</a>
              <a href="#" class="badge bg-light text-dark p-2 text-decoration-none">Тюльпаны</a>
              <a href="#" class="badge bg-light text-dark p-2 text-decoration-none">Пионы</a>
              <a href="#" class="badge bg-light text-dark p-2 text-decoration-none">Свадебные букеты</a>
              <a href="#" class="badge bg-light text-dark p-2 text-decoration-none">Букеты невесты</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

document.querySelector(`main`).insertAdjacentHTML(`beforebegin`, modalSearchTemplate);