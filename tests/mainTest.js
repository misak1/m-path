var assert = require('assert');
var m_path = require(__dirname+'/../index.js');

if(m_path.isWindows()){
	suite('pathSplit', function() {
		test('pathSplit#1', function() {
			assert.deepEqual(m_path.pathSplit('index.html'), ['index.html']);
		});
		test('pathSplit#2', function() {
			assert.deepEqual(m_path.pathSplit('.¥index.html'), ['.', 'index.html']);
		});
		test('pathSplit#3', function() {
			assert.deepEqual(m_path.pathSplit('test1¥index.html'), ['test1','index.html']);
		});
		test('pathSplit#4', function() {
			assert.deepEqual(m_path.pathSplit('¥test2¥index.html'), ['test2','index.html']);
		});
		test('pathSplit#5', function() {
			assert.deepEqual(m_path.pathSplit('.¥test3¥index.html'), ['.','test3','index.html']);
		});
		test('pathSplit#6', function() {
			assert.deepEqual(m_path.pathSplit('test4¥test4¥index.html'), ['test4','test4','index.html']);
		});
		test('pathSplit#7', function() {
			assert.deepEqual(m_path.pathSplit('¥test5¥test5¥index.html'), ['test5','test5','index.html']);
		});
	});

	suite('pathJoin', function() {
		test('pathJoin#1', function() {
			assert.deepEqual(m_path.pathJoin(['index.html']), 'index.html');
		});
		test('pathJoin#2', function() {
			assert.deepEqual(m_path.pathJoin(['.', 'index.html']), '.¥index.html');
		});
		test('pathJoin#3', function() {
			assert.deepEqual(m_path.pathJoin(['test1','index.html']), 'test1¥index.html');
		});
		test('pathJoin#4', function() {
			assert.deepEqual(m_path.pathJoin(['', 'test2','index.html']), '¥test2¥index.html');
			// 単純結合なので、'¥'から始まる場合はから要素がないとダメ。
		});
		test('pathJoin#5', function() {
			assert.deepEqual(m_path.pathJoin(['.','test3','index.html']), '.¥test3¥index.html');
		});
		test('pathJoin#6', function() {
			assert.deepEqual(m_path.pathJoin(['test4','test4','index.html']), 'test4¥test4¥index.html');
		});
		test('pathJoin#7', function() {
			assert.deepEqual(m_path.pathJoin(['', 'test5','test5','index.html']), '¥test5¥test5¥index.html');
			// 単純結合なので、"/"から始まる場合はから要素がないとダメ。
		});
	});
}else{
	suite('pathSplit', function() {
		test('pathSplit#1', function() {
			assert.deepEqual(m_path.pathSplit('index.html'), ['index.html']);
		});
		test('pathSplit#2', function() {
			assert.deepEqual(m_path.pathSplit('./index.html'), ['.', 'index.html']);
		});
		test('pathSplit#3', function() {
			assert.deepEqual(m_path.pathSplit('test1/index.html'), ['test1','index.html']);
		});
		test('pathSplit#4', function() {
			assert.deepEqual(m_path.pathSplit('/test2/index.html'), ['test2','index.html']);
		});
		test('pathSplit#5', function() {
			assert.deepEqual(m_path.pathSplit('./test3/index.html'), ['.','test3','index.html']);
		});
		test('pathSplit#6', function() {
			assert.deepEqual(m_path.pathSplit('test4/test4/index.html'), ['test4','test4','index.html']);
		});
		test('pathSplit#7', function() {
			assert.deepEqual(m_path.pathSplit('/test5/test5/index.html'), ['test5','test5','index.html']);
		});
	});

	suite('pathJoin', function() {
		test('pathJoin#1', function() {
			assert.deepEqual(m_path.pathJoin(['index.html']), 'index.html');
		});
		test('pathJoin#2', function() {
			assert.deepEqual(m_path.pathJoin(['.', 'index.html']), './index.html');
		});
		test('pathJoin#3', function() {
			assert.deepEqual(m_path.pathJoin(['test1','index.html']), 'test1/index.html');
		});
		test('pathJoin#4', function() {
			assert.deepEqual(m_path.pathJoin(['', 'test2','index.html']), '/test2/index.html');
			// 単純結合なので、"/"から始まる場合はから要素がないとダメ。
		});
		test('pathJoin#5', function() {
			assert.deepEqual(m_path.pathJoin(['.','test3','index.html']), './test3/index.html');
		});
		test('pathJoin#6', function() {
			assert.deepEqual(m_path.pathJoin(['test4','test4','index.html']), 'test4/test4/index.html');
		});
		test('pathJoin#7', function() {
			assert.deepEqual(m_path.pathJoin(['', 'test5','test5','index.html']), '/test5/test5/index.html');
			// 単純結合なので、"/"から始まる場合はから要素がないとダメ。
		});
	});
}
