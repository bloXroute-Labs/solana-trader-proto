PB_GO_IMAGE_NAME=bloxroute/bdn-protobuf:v3.19.3-go
PB_JS_IMAGE_NAME=bloxroute/bdn-protobuf:v3.19.3-js

.PHONY: all test integration fmt
.PHONY: proto proto-build-gw proto-build-swagger proto-build-api proto-build-common-go proto-build-ffi-go proto-build-ffi-js
.PHONY: proto-docker proto-docker-push-go proto-docker-build-go proto-docker-push-js proto-docker-build-js
.PHONY: cred-github cred-solana data-accounts environment-dev

all: clean proto

clean:
	rm -rf js api common

proto: proto-build-api-go proto-build-common-go proto-build-api-js proto-build-swagger proto-build-gw

proto-build-gw:
	docker run -v $(CURDIR)/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc \
			--grpc-gateway_out ../out \
			--grpc-gateway_opt logtostderr=true \
			--grpc-gateway_opt paths=source_relative \
			api.proto

proto-build-swagger:
	docker run -v $(CURDIR)/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --openapiv2_out ../out --openapiv2_opt logtostderr=true api.proto
	mv api/api.swagger.json swagger-ui

proto-build-api-go:
	docker run -v $(CURDIR)/api:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --go_out=../out --go_opt=paths=source_relative  --go-grpc_out=../out --go-grpc_opt=paths=source_relative api.proto

proto-build-common-go:
	docker run -v $(CURDIR)/common:/go/protobuf/out \
			   -v $(CURDIR)/proto:/go/protobuf/in $(PB_GO_IMAGE_NAME) \
		protoc --go_out=../out --go_opt=paths=source_relative  --go-grpc_out=../out --go-grpc_opt=paths=source_relative common.proto

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

proto-docker: proto-docker-build-go proto-docker-build-js proto-docker-push-go proto-docker-push-js

proto-docker-push-go:
	docker push $(PB_GO_IMAGE_NAME)

proto-docker-build-go:
	cd proto && docker build . -f Dockerfile-go -t $(PB_GO_IMAGE_NAME) --platform linux/amd64

proto-docker-push-js:
	docker push $(PB_JS_IMAGE_NAME)

proto-docker-build-js:
	cd proto && docker build . -f Dockerfile-js -t $(PB_JS_IMAGE_NAME) --platform linux/amd64
