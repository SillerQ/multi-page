/**
 * @file index页面入口文件
 * @author Auven
 */

import '@/layout/layout';
import './index.less';

import $ from 'jquery';

import Sortable from 'sortablejs';

// 引入icheck
import '@/vendor/icheck-1.0.2/icheck';
import '@/vendor/icheck-1.0.2/skins/minimal/minimal.css';

// Grouping
const foo = document.querySelector('.main-left');
const fooSort = Sortable.create(foo, {
  group: 'omega',
  disabled: true,
  handle: '.panel-heading',
  animation: 150
});

const bar = document.querySelector('.main-right');
const barSort = Sortable.create(bar, {
  group: 'omega',
  disabled: true,
  handle: '.panel-heading',
  animation: 150
});

$('input').iCheck({
  checkboxClass: 'icheckbox_minimal',
  radioClass: 'iradio_minimal',
  increaseArea: '20%' // optional
});

$('.page-setting').on('click', function () {
  if ($('.page-setting-btn').is(':hidden')) {
    fooSort.option('disabled', false);
    barSort.option('disabled', false);
  } else {
    fooSort.option('disabled', true);
    barSort.option('disabled', true);
  }
  $('.page-setting-btn').toggle();
  $('.index-main .panel .panel-heading').toggleClass('handle');
  $('.index-main .panel .select').toggle();
});

$('.page-setting-btn .btn-save').on('click', function () {
  console.log('保存');
});

$('.page-setting-btn .btn-cancel').on('click', function () {
  console.log('取消');

  fooSort.option('disabled', true);
  barSort.option('disabled', true);

  $('.page-setting-btn').hide();
  $('.index-main .panel .panel-heading').removeClass('handle');
  $('.index-main .panel .select').hide();
});

$('.index-main .panel .close').on('click', function () {
  // 使用animate方法实现不了呢，因为transform不是单纯的数字，不识别
  if ($(this).parents('.panel').find('.panel-body').is(':hidden')) {
    $(this).css({
      transform: 'rotate(0deg)'
    });
  } else {
    $(this).css({
      transform: 'rotate(180deg)'
    });
  }

  $(this).parents('.panel').find('.panel-body').slideToggle();
});
