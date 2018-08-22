(function (window) {
  const Slide = function (container, params) {
    params = params || {};
    // 初始化参数
    let options = {
      speed: 500,
      mode: 'slide', // 模式
      direction: 'horizontal',
      distance: 30,
      pagination: false, // 分页
      loop: false, // 循环
      autoplay: false, // 自动播放
      box: {
        rows: 6,
        cols: 3
      },
      autoplayDisableOnInteraction: true
    };
    let originParams = Object.assign({}, options, params);
    let _ = this;
    _.params = params;
    _.originParams = originParams;
    _.isPressed = false;
    _.mouse = {
      x: 0,
      y: 0,
      sx: 0,
      sy: 0
    }
    _.container = container;
    _.pagination = null;
    _.rotation = 0;
    _.lock = false;
    _.currentIndex = 0;
    _.activeIndex = 0;
    _.direction = '';
    _.autoplaying = true;
    _.container = 
      typeof _.container === 'string'
      ? document.querySelectorAll(_.container)
      : _.container
    if (_.container.length === 0) return;
    if (_.container.length > 1) {
      let slides = [];
      Array.prototype.forEach.call(_.container, function (child) {
        child.length = 1;
        slides.push(new Slide(child, params))
      })
      return slides
    }
    _.container = _.container[0] || _.container;
    // 判断是否移动端
    _.isTouch = 'ontouchend' in document;
    _.wrapper = _.container.querySelector('.wrapper');
    _.slides = _.wrapper.querySelectorAll('.slide');
    _.totalLength = _.slides.length;
    _.updateContainerSize = function () {
      let width, height;
      if (typeof _.params.width !== 'undefined') {
        width = _.params.width;
      } else {
        width = _.container.clientWidth;
      }
      if (typeof _.params.height !== 'undefined') {
        height = _.params.height;
      } else {
        height = _.container.clientHeight;
      }
      _.params.width = width;
      _.params.height = height;
      _.container.style.width = parseFloat(_.params.width) + 'px'
      _.container.style.height = parseFloat(_.params.height) + 'px'
      Array.prototype.forEach.call(_.slides, function (slide, i) {
        slide.style.width = _.params.width + 'px'
        slide.style.height = _.params.height + 'px'
      })
      // _.effects.event.init()
    }

    // 分页器
    _.addPagination = function () {
      _.pagination = _.container.querySelector('.slide-pagination')
      if (_.params.pagination && _.pagination) {
        let bullets = [];
        for (let i = 0; i < _.totalLength; i++) {
          let bullet = document.createElement('span')
          bullet.setAttribute('data-index', i)
          bullet.className = 'slide-pagination-bullet'
          if (i === 0) {
            bullet.classList.add('.slide-pagination-bullet-active')
          }
          if (_.params.paginationClickable) {
            addEvent(bullet, 'click', function () {
              let index = parseInt(this.getAttribute('data-index'))
              _.slideTo(index)
              _.autoplaying = false
            })
          }

          _.pagination.appendChild(bullet)
        }
      }
    }

    _.executeAnimate = function () {

    }

    _.effects = {
      slide: {
        init: function () {
          if (_.params.direction === 'horizontal') {
            if (_.params.loop) {
              _.wrapper.style.width = _.params.width * (_.totalLength + 2) + 'px'
            } else {
              _.wrapper.style.width = _.params.width * (_.totalLength) + 'px'
            }
          } else if (_.params.direction === 'vertical') {
            _.container.classList.add('container-vertical')
            if (_.params.loop) {
              _.wrapper.style.height = _.params.height * (_.totalLength + 2) + 'px'
            } else {
              _.wrapper.style.height = _.params.height * _.totalLength + 'px';
            }
          }
          if (_.params.loop) {
            let firstChild = _.wrapper.firstElementChild.cloneNode(true);
            let lastChild = _.wrapper.lastElementChild.cloneNode(true);
            _.wrapper.appendChild(firstChild)
            _.wrapper.insertBefore(lastChild, _.wrapper.firstElementChild)
            _.setTrabsutuibDyratuib
          }
        }
      }
    }

    _.pageInit = () => {
      _.updateContainerSize()
    }
    _.pageInit()
    return _
  }

  window.Slide = Slide
})(window)