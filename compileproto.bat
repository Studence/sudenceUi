cd src\uiprotos
echo [COMPILEING..........]
protoc time.proto --js_out=import_style=commonjs,binary:..\proto
protoc entity.proto --js_out=import_style=commonjs,binary:..\proto
cd ..
