# Slack 웹훅 연동 가이드

Claude Code 작업 시 모바일 Slack으로 실시간 알림을 받는 방법입니다.

## 📋 개요

- **권한 요청 시**: 🔐 오렌지색 알림
- **작업 완료 시**: ✅ 녹색 알림

## 🚀 설정 방법

### 1단계: Slack Incoming Webhook 생성

1. https://api.slack.com/apps 접속
2. "Create New App" → "From scratch"
3. App 이름: `Claude Code Notifier`
4. "Incoming Webhooks" 활성화
5. "Add New Webhook to Workspace"
6. 알림 받을 채널 선택
7. Webhook URL 복사

### 2단계: Hook 스크립트 설치

```bash
# 디렉토리 생성
mkdir -p ~/.claude/hooks

# 스크립트 작성 (아래 내용 복사)
cat > ~/.claude/hooks/slack-notify.sh << 'EOF'
#!/bin/bash

TITLE="$1"
MESSAGE="$2"
COLOR="${3:-#36a64f}"
WEBHOOK_URL="$CLAUDE_SLACK_WEBHOOK_URL"

if [ -z "$WEBHOOK_URL" ]; then
    echo "❌ CLAUDE_SLACK_WEBHOOK_URL 환경 변수가 설정되지 않았습니다."
    exit 1
fi

PROJECT_PATH="${4:-$(pwd)}"
PROJECT_NAME=$(basename "$PROJECT_PATH")

PAYLOAD=$(cat <<PAYLOAD_EOF
{
    "attachments": [
        {
            "color": "$COLOR",
            "title": "$TITLE",
            "text": "$MESSAGE",
            "fields": [
                {
                    "title": "프로젝트",
                    "value": "$PROJECT_NAME",
                    "short": true
                },
                {
                    "title": "시간",
                    "value": "$(date '+%Y-%m-%d %H:%M:%S')",
                    "short": true
                }
            ],
            "footer": "Claude Code"
        }
    ]
}
PAYLOAD_EOF
)

curl -X POST \
    -H 'Content-type: application/json' \
    --data "$PAYLOAD" \
    "$WEBHOOK_URL" \
    --silent --output /dev/null
EOF

# 실행 권한 부여
chmod +x ~/.claude/hooks/slack-notify.sh
```

### 3단계: 환경 변수 설정

```bash
# ~/.zshrc에 추가 (YOUR_WEBHOOK_URL을 실제 URL로 변경)
echo 'export CLAUDE_SLACK_WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"' >> ~/.zshrc

# 적용
source ~/.zshrc
```

### 4단계: Claude Code Hooks 설정

`.claude/settings.local.json` 파일에 다음 내용 추가:

```json
{
  "hooks": {
    "PermissionRequest": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "export CLAUDE_SLACK_WEBHOOK_URL=\"YOUR_WEBHOOK_URL\" && ~/.claude/hooks/slack-notify.sh '🔐 권한 요청' \"도구: $TOOL_NAME\\n권한이 필요합니다.\" '#ff9900' \"$CWD\""
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "export CLAUDE_SLACK_WEBHOOK_URL=\"YOUR_WEBHOOK_URL\" && ~/.claude/hooks/slack-notify.sh '✅ 작업 완료' \"도구: $TOOL_NAME 실행 완료\" '#36a64f' \"$CWD\""
          }
        ]
      }
    ]
  }
}
```

**중요**: `YOUR_WEBHOOK_URL`을 실제 Slack Webhook URL로 변경하세요.

## 🧪 테스트

```bash
~/.claude/hooks/slack-notify.sh "테스트" "알림 테스트입니다" "#0000ff"
```

## 🎛️ 알림 조절

알림이 너무 많다면 `PostToolUse`의 `matcher`를 특정 도구로 제한:

```json
{
  "matcher": "Bash"  // Bash 명령만 알림
}
```

## 📱 모바일 푸시 알림 설정

Slack 데스크톱 앱 → 환경설정 → 알림:
- **"Always send mobile notifications"** 선택

## 🔒 보안

- `.claude/settings.local.json`은 Git에 커밋되지 않음 (전역 gitignore)
- Webhook URL이 노출되지 않도록 주의
