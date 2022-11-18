PB_GO_IMAGE_NAME=bloxroute/bdn-protobuf:v3.19.3-go
PB_JS_IMAGE_NAME=bloxroute/bdn-protobuf:v3.19.3-js

.PHONY: all test integration fmt
.PHONY: proto proto-build-gw proto-build-swagger proto-build-api proto-build-ffi-go proto-build-ffi-js proto-clean-swagger
.PHONY: proto-docker proto-docker-push-go proto-docker-build-go proto-docker-push-js proto-docker-build-js
.PHONY: cred-github cred-solana data-accounts environment-dev

all: proto

proto: proto-build-api-go proto-build-api-js proto-build-swagger proto-build-gw proto-build-ffi-go proto-build-ffi-js proto-clean-swagger

proto-build-gw:
	docker run -v $(CURDIR)/proto/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc \
			--grpc-gateway_out ../out \
			--grpc-gateway_opt logtostderr=true \
			--grpc-gateway_opt paths=source_relative \
			api.proto

proto-build-swagger:
	docker run -v $(CURDIR)/proto/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --openapiv2_out ../out --openapiv2_opt logtostderr=true api.proto
	mv proto/api/api.swagger.json swagger-ui

proto-build-api-go:
	docker run -v $(CURDIR)/proto/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --go_out=../out --go_opt=paths=source_relative  --go-grpc_out=../out --go-grpc_opt=paths=source_relative api.proto

proto-build-api-js:
	docker run -v $(CURDIR)/js/ffi/proto:/home/node/out \
			   -v $(CURDIR)/proto:/home/node/in $(PB_JS_IMAGE_NAME) \
		  	bash -c  \
			'grpc_tools_node_protoc \
				--plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts \
				--ts_out=grpc_js:../out \
				--js_out=import_style=commonjs,binary:../out \
				--grpc_out=grpc_js:../out \
				$$(find . -iname "*.proto")'

proto-build-ffi-go:
	docker run -v $(CURDIR)/proto/ffi:/go/protobuf/out \
			   -v $(CURDIR)/proto/ffi:/go/protobuf/in \
			   -v $(CURDIR)/proto:/go/protobuf/in/api $(PB_GO_IMAGE_NAME) \
		protoc --go_out=../out --go_opt=paths=source_relative  --go-grpc_out=../out --go-grpc_opt=paths=source_relative -I . -I ./api ffi.proto

proto-build-ffi-js:
	docker run -v $(CURDIR)/js/ffi/proto:/home/node/out \
			   -v $(CURDIR)/proto/ffi:/home/node/in \
			   -v $(CURDIR)/proto:/home/node/in/api $(PB_JS_IMAGE_NAME) \
		grpc_tools_node_protoc \
			--plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts \
			--ts_out=grpc_js:../out \
			--js_out=import_style=commonjs,binary:../out \
			--grpc_out=grpc_js:../out \
			-I /home/node/in \
			-I /home/node/in/api \
			ffi.proto

proto-docker: proto-docker-build-go proto-docker-build-js proto-docker-push-go proto-docker-push-js

proto-docker-push-go:
	docker push $(PB_GO_IMAGE_NAME)

proto-docker-build-go:
	cd proto && docker build . -f Dockerfile-go -t $(PB_GO_IMAGE_NAME) --platform linux/amd64

proto-docker-push-js:
	docker push $(PB_JS_IMAGE_NAME)

proto-docker-build-js:
	cd proto && docker build . -f Dockerfile-js -t $(PB_JS_IMAGE_NAME) --platform linux/amd64
